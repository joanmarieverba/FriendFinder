// LOAD DATA

let friendsData = require("../data/friends");

// ROUTING

module.exports = function (app) {

    //sends the contents of friendsData to the server
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function (req, res) {
        //adds the input data to friendsData
        friendsData.push(req.body);

        let differenceArray = [];
        let difference;
        let accumulatedDifference = 0;

        //length-1 because the last entry is the input entry
        for (let i=0; i<friendsData.length-1; i++){
            accumulatedDifference = 0;
            // calculate the total difference for each stored entry
            for (let index = 0; index<friendsData[i].scores.length; index++){
                difference = Math.abs(parseInt(friendsData[i].scores[index]) - parseInt(req.body.scores[index]));
                accumulatedDifference = accumulatedDifference + difference;
            };
            differenceArray.push(accumulatedDifference);
        };

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
        //send results to server for retrieval
        res.json(bestMatch);
    });

};


