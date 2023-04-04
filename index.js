/*

  - https://github.com/ffrrancis/pingr
  - last updated 4/4/2023

*/


const Pinger = require("simple-website-pinger");
const Express = require("express");

const App = Express();
const { Links, Interval } = require("./config.json");

App.get("/", (_req, res) => {
  res.sendFile("index.html", { root: __dirname });
});

App.listen(6666, () => {
  console.log(
    `[💎 pingr notifications] Successfully started pinging. You can now leave this page.`
  );
});

Pinger.ping([Links], Interval);
