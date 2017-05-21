const pug = require("pug");
const recursive = require("recursive-readdir");
const fs = require("fs");

function getInfoFile(filename) {
    let finalFile = filename.split("/");
    return {
        name: finalFile[finalFile.length - 1].split(".")[0],
        type: finalFile[finalFile.length - 1].split(".")[1]
    };
}

function pugFile(filename, info) {
    if(filename.endsWith(".pug")) {
        let data = fs.readFileSync(filename, 'utf8');

        let compiled = pug.compileClient(data, {
            compileDebug: false,
            name: info.name
        });

        compiled += "\nexport default " + info.name + ";";
        return compiled;
    }

    return null;
}

function pugFiles(files, callbackContent) {
    files.forEach((filename) => {
        let out = getInfoFile(filename);
        if(out.type !== "pug")
            return null;

        out.type = "js";
        callbackContent(
            pugFile(filename, out), out.name + "." + out.type
        );
    });
}

module.exports = function(includesArray, finalPath) {
    if (!fs.existsSync(finalPath)){
        fs.mkdirSync(finalPath);
    }

    if(!finalPath.endsWith("/"))
        finalPath += "/";

    includesArray.forEach((dir) => {
        recursive(dir, function(err, files) {
            pugFiles(files, (pugText, newFileName) => {
                if(pugText != null)
                    fs.writeFile(finalPath + newFileName, pugText, function(err) {
                        if(err) {
                            return console.error("error write to " + finalPath + newFileName);
                        }

                        console.log("save file " + finalPath + newFileName);
                    });
            });
        });
    });
};