export function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

export function setCookie(name, value, options) {
    options = options || {};

    let expires = options.expires;

    if (typeof expires === "number" && expires) {
        let d = new Date();
        d.setTime(d.getTime() + expires * 1000);
        expires = options.expires = d;
    }
    if (expires && expires.toUTCString) {
        options.expires = expires.toUTCString();
    }

    value = encodeURIComponent(value);

    let updatedCookie = name + "=" + value;

    for (let propName in options) {
        updatedCookie += "; " + propName;
        let propValue = options[propName];
        if (propValue !== true) {
            updatedCookie += "=" + propValue;
        }
    }

    document.cookie = updatedCookie;
}

function setLoginCookies(flag, name) {
    setCookie('logged', flag);
    setCookie('login', name);
}

export function setOnlyBar() {
    let title = document.getElementById('registered');
    if (title)
        title.textContent = getCookie('login');
}

export function setCookiesAndBar(authFlag, name) {
    name = name || 'Guest';

    setLoginCookies(authFlag, name);

    if(authFlag)
        setOnlyBar();
    else
        setLoginCookies(authFlag, name);
}

export function isLogin() {
    let status = getCookie('logged');
    if (status == "true") {
        console.log("Already login!");
        return true;
    } else
        console.log("Need login!");

    return false;
}