var fs = require('fs');
var STORAGE = "/usr/share/nginx/html/deploytest2"


async function pickapp(req) {
    const url = req.variables.request_uri;
    const parts = url.split('/');
    let file = parts[parts.length - 1];
    if (!file.includes('.')) {
        file = "index.html";
    }

    const appStorage = Math.random() > 0.5 ? "/src1" : "/src2";
    let data = "innlasting";
    try {
        data = fs.readFileSync(STORAGE + appStorage + "/" + file);
    } catch (err) {
        req.return(404);
        return;
    }
    req.return(200, data);
}

export default {
    pickapp
};