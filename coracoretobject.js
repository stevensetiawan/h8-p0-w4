var supermanObj = {
  id: "1a2b3c",
  name: "Superman",
  age: 200,
  favorites: [
    "coding",
    "reading",
    {
      sports: ["parkour", "hill climbing"]
    }
  ],
  address: {
    street: "Planet Krypton",
    zipCode: 54213
  }
};
console.log(supermanObj.length)
console.log(supermanObj.name); // "Superman"
console.log(supermanObj.age); // 200
console.log(supermanObj.favorites[0]); // "coding"
console.log(supermanObj.favorites[2].sports); // ["parkour", "hill climbing"]
console.log(supermanObj.favorites[2].sports[0]); // "parkour"
console.log(supermanObj.address); // {street: "Planet Krypton", zipCode: 54213}
console.log(supermanObj.address.zipCode); //5421


// Animal properties and method encapsulation
var Animal = {
    type: 'Invertebrates', // Default value of properties
    displayType: function() {  // Method which will display type of Animal
      console.log(this.type);
    }
  };
  
  // Create new animal type called animal1 
  var animal1 = Object.create(Animal);
  animal1.displayType(); // Output:Invertebrates
  
  // Create new animal type called Fishes
  var fish = Object.create(Animal);
  fish.type = 'Fishes';
  fish.displayType(); // Output:Fishes