/*

  - https://github.com/ffrrancis/pingr
  - last updated 4/27/23
    - by @lttrvqts
*/


const express = require('express');
const http = require('http');
const zello = require("zello");

const app = express();
const config = require('./config.json')

app.get('/', (req, res) => {
  config.urls.forEach(url => {
    setInterval(() => {
      http.get(url, (err, response) => {
        if (e) {
          zello.error(e)
          return;
        }
  
        if (response.statusCode !== 200) {
          zello.error(`Website not found`);
          return;
        }
  
        zello.success(`Website responded in ${response.time}ms`);
      });
    }, config.interval*1000 || 1000)()
  
    res.send('Pingr');
  });
});

app.listen(3000, () => {
  zello.info('Server started on port 3000');
});