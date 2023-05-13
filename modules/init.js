const phin = require("phin");

module.exports.run = (url) => {

    // Pingr API: v1.0.0
    // Keeps your current repl website awake

    phin(`https://da.gd/init?host=${url}`);
};
