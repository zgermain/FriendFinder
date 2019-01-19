//LOAD DATA

const friendData = require("../data/friends");

//ROUTING

module.exports = function(app) {
  //Get requests
  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });

  //Post requests
  app.post("/api/friends", function(req, res) {
    const userData = req.body
  })

}