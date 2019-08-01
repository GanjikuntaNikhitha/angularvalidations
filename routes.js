'use strict'

// routes.js
// load all the things we need
var path = require('path');


var appRouter = function (app) {

  // Default API
  app.get("/test", function (req, res) {
    res.sendFile(path.join(__dirname, '', './view/test.html'));
  });


}
module.exports = appRouter;