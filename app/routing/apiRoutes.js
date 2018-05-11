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
        console.log("result ", req.body);
        friendsData.push(req.body);
        console.log("newfriendsData ", friendsData);
        
    });


};
