// LOAD DATA

let friendsData = require("../data/friends");


// ROUTING

module.exports = function (app) {

    //sends the contents of friendsData
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    //adds the input data to friendsData
    app.post("/api/friends", function (req, res) {
       // console.log("result ", req.body);
        friendsData.push(req.body);
       // console.log("req.body ", req.body.scores);
       // console.log("newfriendsData ", friendsData);
        let differenceArray = [];
        let difference;
        let accumulatedDifference = 0;
        //length-1 because the last entry is the input entry
        for (let i=0; i<friendsData.length-1; i++){
          //  console.log("scores ", friendsData[i].scores);
            accumulatedDifference = 0;
            // calculate the total difference for each stored entry
            for (let index = 0; index<friendsData[i].scores.length; index++){
             //   console.log("friendsData[i].scores[index] ", friendsData[i].scores[index]);
             //   console.log(friendsData[i].scores[index], req.body.scores[index]);
                difference = Math.abs(parseInt(friendsData[i].scores[index]) - parseInt(req.body.scores[index]));
            //    console.log("difference ", difference);
                accumulatedDifference = accumulatedDifference + difference;
            };
            differenceArray.push(accumulatedDifference);
        };
 //       console.log("accumulatedDifference ", accumulatedDifference);
 //       console.log("differenceArray ", differenceArray);
  //      res.json(bestMatch);
        //find the index of the lowest value
        let bestMatch = [];
        let bestMatchIndex = 0;
        for (let n = 0; n < differenceArray.length; n++){
            if (differenceArray[bestMatchIndex] > differenceArray[n]){
                bestMatchIndex = n;
            }
        };
        let bestMatchName = friendsData[bestMatchIndex].name;
        let bestMatchUrl = friendsData[bestMatchIndex].photo;
        bestMatch.push(bestMatchName);
        bestMatch.push(bestMatchUrl);
        console.log(bestMatch);
    });


};


