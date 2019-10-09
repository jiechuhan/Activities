const fs = require("fs");

fs.readFile("animals.json", "utf8", function(err, data) {
  if (err) {
    throw err;
  }

  const dogs = [];
  const cats = [];

  // Parse the JSON string to an object
  const animalJSON = JSON.parse(data);
  console.log(animalJSON)

  for (const animal of animalJSON) {
    const {species} = animal;
    console.log(species);
    if (species === "cat") {
      cats.push(animal)
    } else {
      dogs.push(animal)
    }
  }

console.log(cats)
console.log(dogs)

  // Create two new arrays to contain the cats and dogs objects
  
});
