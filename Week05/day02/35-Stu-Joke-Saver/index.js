const fs = require("fs");
const util = require("util");
const axios = require("axios");

const appendFileAsync = util.promisify(fs.appendFile);
const readFileAsync = util.promisify(fs.readFile);

const config = { headers: { accept: "application/json" } };

axios.get("https://icanhazdadjoke.com/", config)
  .then(function (res) {

    console.log(res.data.joke);

    const joke = JSON.stringify(res.data.joke)
    console.log(joke)

    appendFileAsync("jokes.txt", joke + "\n").then(function () {
      console.log("Successfully wrote to jokes.txt file");
    }).then(function() {
      readFileAsync("jokes.txt", "utf8").then(function (data) {
        // console.log(data)
        const jokeOut = data
        console.log(jokeOut)
      });
    });
  });
