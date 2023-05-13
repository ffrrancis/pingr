/*

  - https://github.com/ffrrancis/pingr
  - last updated 4/27/23
    - by @lttrvqts
*/

const chalk = require("chalk");
const init = require("./modules/init");
const config = require("./config.json");

console.log(
  chalk
    .hex("#0a8cee")
    .bold("Please wait while we initialize your repl(s) with the Pingr API")
);

config.urls.forEach((repl) => {
  init.run(repl);
  console.log(`\n`);
  console.log(chalk.hex("#07c8f9").bold(`${repl} has been initialized`));
});
