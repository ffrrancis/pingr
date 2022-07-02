const pinger = require("simple-website-pinger");
const express = require("express");

const app = express();
const { links } = require("./config.json");

app.get("/", (_req, res) => {
  res.sendFile("index.html", { root: __dirname });
});

app.listen(6666, () => {
  console.log(
    `[🟣 pingr notifications] Successfully started pinging. You can now leave this page.`
  );
});

pinger.ping([links]);
