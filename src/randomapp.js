var fs = require('fs');
var STORAGE = "/usr/share/nginx/html/deploytest2"

var rndFileName = process.env.RND_FILE_NAME;
var jsContent = "console.log('"+rndFileName+"');";
var indexHtml = fs.readFileSync(STORAGE + "/index.html")
    .toString()
    .replace(/{{rndFileName}}/g, rndFileName);

async function pickapp(req) {
    const url = req.variables.request_uri;
    const parts = url.split('/');
    let file = parts[parts.length - 1];

    if (!file.includes('.') || file.includes("index.html")) {
        req.return(200, indexHtml);
    } else if (file.includes(rndFileName)) {
        req.return(200, jsContent);
    } else {
        req.return(404, rndFileName);
    }
}

export default {
    pickapp
};