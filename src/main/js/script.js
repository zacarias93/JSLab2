" use strict ";

function PetChat(){
  var display = document.getElementById("display");
  var numPets = null;

  var askHowMany = function(){
    return prompt("How many pets do you have?");
  };

  var askPetInfo = function(){
    for(var i=0; i<numPets; i++){
      var type = prompt("What is pet #" + (i+1) + "? (cat, dog, bird)");
      var name = prompt("What is pet #" + (i+1) + "'s name'?");

      if(type == "cat") {
        var animal = new Cat(name);
      }
      else if( type == "dog") {
        var animal = new Dog(name);
      }
      else if (type == "bird") {
        var animal = new Bird(name);
      }
      else {
        var animal = new Pet(name);
      }
      var textOut = animal.speak();
      display.innerHTML += textOut;
    }
  };

  this.init = function(){
    while(numPets === null){
      numPets = askHowMany();
    }

    askPetInfo();
  }


  function Pet (name) {
    this.name = name;
    this.type = "pet";
    this.sound = "I am a pet";
    this.speak = function() {
      return "I am a " + this.type + " and my name is " + this.name + " and I say " + this.sound + "</br>";
    }
  }

  function Cat (name) {
    this.name = name;
    this.type = "cat";
    this.sound = "Meow";
  }

  function Dog(name) {
    this.name = name;
    this.type = "dog";
    this.sound = "Bark";
  }

  function Bird(name) {
    this.name = name;
    this.type = "bird";
    this.sound = "Screech";
  }

  Cat.prototype = new Pet();
  Dog.prototype = new Pet();
  Bird.prototype = new Pet();

  // Pet.prototype.speak = function() {
  //   var sound = "I am a pet!";
  //   display.innerHTML += sound;
  // }
  //
  // Cat.prototype.speak = function() {
  //   var sound = "Meow!";
  //   display.innerHTML += sound;
  // }
  //
  // Dog.prototype.speak = function() {
  //   var sound = "Woof!";
  //   display.innerHTML += sound;
  // }
  //
  // Bird.prototype.speak = function() {
  //   var sound = "Screech!";
  //   display.innerHTML += sound;
  // }
};


var chat = new PetChat();
chat.init();


