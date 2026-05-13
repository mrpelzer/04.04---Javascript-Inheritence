/* === EXERCISE 1 CODE ALONG === */

class Pet {
  constructor(name, breed) {
      this.name = name;
      this.breed = breed;
      this.show = function() {
          var text = "<p>Your pet's name is " + this.name + ". The pet's breed is " + this.breed + ".</p>";
          return text;
      };
  }
}









/* ==== EXERCISE 2 ==== */
