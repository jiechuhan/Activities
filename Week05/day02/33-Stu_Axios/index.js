const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

inquirer
  .prompt({
    message: "Enter your GitHub username",
    name: "username"
  })
  .then(function({ username }) {
    const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;
  
    axios
    .get(queryUrl)
    .then(function(res) {
      // console.log(res.data)
      const datas = res.data
      // console.log(dataJson)
  
      for (const data of datas) {
        const {name} = data;
        console.log(name)

        fs.appendFile("repos.txt", name + "\n", function(err) {
          if (err) {
            return console.log(err)
          }
          console.log("Suceess!")
        })
      }


    })


    
  
  });

