"use strict";
//when you dont knw the exact data type that you gonna use use union 
exports.__esModule = true;
var score = 36;
score = "pass";
var man;
// let superman:admin & user;
function superman(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
    else {
        id + 2;
    }
}
var data = [1, 2, 3, "yes"];
man = { name: "yes", id: 12, group: "no" };
