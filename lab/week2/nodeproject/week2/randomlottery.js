const fs = require("fs");

fs.writeFileSync("Your lottery numbers are:", "and Powerball", "utf-8");

let fileContents = fs.readFileSync("randomlottery.js", "utf-8");

    let getRandomNumber = function(start, range) {
        let getRandom = Math.floor((Math.random() * range) + start);
        
        while (getRandom > range) {
            getRandom = Math.floor((Math.random() * range) + start);

        }

        console.log(getRandomNumber(1, 69));
        return getRandom;

    }

        console.log(getRandomNumber)(1, 26);
        return getRandom;

    fileContents = fileContents + getRandomNumber("utf-8");

    fs.writeFileSync("randomlottery.js", fileContents, "utf-8");
