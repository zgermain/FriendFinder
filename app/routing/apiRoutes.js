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
    let userData = req.body;
    friendData.push(userData);
    // console.log(userData);

    let userScores = userData.scores;
    console.log(userScores);


    //Calculate best friend
    let bestName = '';
    let bestImage = '';
    let totalDifference = 100;

    for (i=0; i < friendData.length; i++) {
      let difference = 0;
      for (j=0; j < userData.length; j++) {
        difference += Math.abs(friendData[i].scores[j] = userScores[j])
      }
      console.log("difference: "+ difference);

      if (difference < totalDifference) {
        totalDifference = difference;
        bestName = friendData[i].name;
        bestImage = friendData[i].photo;
      }
    }

    res.json({message: 'Best Friend Matched!', bestName: bestName, bestImage: bestImage});
    console.log("bestName: "+bestName)
  })

}