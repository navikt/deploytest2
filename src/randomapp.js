var fs = require('fs');
var STORAGE = "/usr/share/nginx/html/deploytest2"

var rndFileName = process.env.RND_FILE_NAME;
var startuptime = parseInt(process.env.STARTUP_TIME);
var maxAlivetime = parseInt(process.env.MAX_ALIVE_TIME);
var jsContent = "console.log('"+rndFileName+"', "+startuptime+");";
var indexHtml = fs.readFileSync(STORAGE + "/index.html")
    .toString()
    .replace(/{{rndFileName}}/g, rndFileName);

async function pickapp(req) {
    const url = req.variables.request_uri;
    const parts = url.split('/');
    let file = parts[parts.length - 1];

    if (!file.includes('.') || file.includes("index.html")) {
        var alivetime = Math.round(new Date().getTime() / 1000) - startuptime;
        req.return(200, indexHtml.replace("{{alivetime}}", alivetime).replace("{{maxalivetime}}", maxAlivetime));
    } else if (file.includes(rndFileName)) {
        req.return(200, jsContent);
    } else {
        req.return(404);
    }
}
async function isAlive(req) {
    var alivetime = Math.round(new Date().getTime() / 1000) - startuptime;
    if (alivetime > maxAlivetime) {
        req.return(500);
    } else {
        req.return(200, "Application:UP")
    }
}

export default {
    pickapp,
    isAlive
};