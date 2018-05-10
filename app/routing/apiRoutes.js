// LOAD DATA

let friendsData = require("../data/friends");


// ROUTING

module.exports = function (app) {

    app.get("/api/friends", function (req, result) {
        result.json(friendsData);
        console.log("friendsData ", result.json(friendsData));
    });


    app.post("/api/friends", function (req, result) {
        console.log("result ", result.req.body);

    });


};
