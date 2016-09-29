" use strict ";

function PetChat(){
  var display = document.getElementById("display");
  var numPets = null;

  var askHowMany = function(){
    return prompt("How many pets do you have?");
  };

  var askPetInfo = function(){
    for(var i=0; i<numPets; i++){
      var sound ="";
      var type = prompt("What is pet #" + (i+1) + "? (cat, dog, bird)");
      var name = prompt("What is pet #" + (i+1) + "'s name'?");
      var textOut = name + " is a " + type + "<br />";
      display.innerHTML += textOut;
    }
  };

  this.init = function(){
    while(numPets === null){
      numPets = askHowMany();
    }

    askPetInfo();
  }
};

  function Pet(name, type) {
    this.name = name;
    this.type = type;
  }

  function Cat (name) {
    this.name = name;
    this.type = "cat";
  }

  function Dog(name) {
    this.name = name;
    this.type = "dog";
  }

  function Bird(name) {
    this.name = name;
    this.type = "bird";
  }

  Cat.prototype = new Pet;
  Dog.prototype = new Pet;
  Bird.prototype = new Pet;

  Pet.prototype.speak = function() {
    var sound = "I am a pet!";
    display.innerHTML += sound;
  }

  Cat.prototype.speak = function() {
    var sound = "Meow!";
    display.innerHTML += sound;
  }

  Dog.prototype.speak = function() {
    var sound = "Woof!";
    display.innerHTML += sound;
  }

  Bird.prototype.speak = function() {
    var sound = "Screech!";
    display.innerHTML += sound;
  }



var chat = new PetChat();
chat.init();


