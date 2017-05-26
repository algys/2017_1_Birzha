'use strict';

/******* PUG-WORK ******/
const includeDirs = [
    "./public/js/blocks",
    "./public/js/game/game_templates"
];

require("./pug_module")(includeDirs, "./public/js/templates");
