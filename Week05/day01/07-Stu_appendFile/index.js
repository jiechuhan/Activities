var fs = require("fs")


for (i=2; i<5; i++) {
    fs.appendFile("log.text", process.argv[i] + "\n", "utf8", function(err) {
        if (err) {
            return console.log(err);
          } 
          console.log("Success!");
    })
}
