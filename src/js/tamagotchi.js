import $ from 'jquery';

export default class Tamagotchi {
  constructor(name) {
    this.name = name;
    this.age = 0;
    this.foodLevel = 100;
    this.excerciseLevel = 100;
    this.restLevel = 100;
  }

  callApi() {
    $.ajax({
      url: `https://pokeapi.co/api/v2/pokemon/pikachu/`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        $('.showPokemon').text(`The pokemon is pikachu`);
        $('.showMoves').text(`The moves for Pikachu is ${response.main.ability}.`);
      },
      error: function() {
        $('#errors').text("There was an error processing your request. Please try again.");
      },
    });
  }

  setHunger() {
    let interval = setInterval(() => {
      let hunger = $('#hunger');
      parseInt(hunger.css("width"));
      hunger.css("width", (this.foodLevel * 5) + "px");
      this.foodLevel--;
      if (this.foodLevel <= 0 || this.excerciseLevel <= 0 || this.restLevel <= 0) {
        clearInterval(interval);
      }
    }, 500);
  }

  setExcercise() {
    let interval = setInterval(() => {
      let excercise = $('#excercise');
      parseInt(excercise.css("width"));
      excercise.css("width", (this.excerciseLevel * 5) + "px");
      this.excerciseLevel--;
      if (this.foodLevel <= 0 || this.excerciseLevel <= 0 || this.restLevel <= 0) {
        clearInterval(interval);
      }
    }, 500);
  }

  setRest() {
    let interval = setInterval(() => {
      let rest = $('#rest');
      parseInt(rest.css("width"));
      rest.css("width", (this.restLevel * 5) + "px");
      this.restLevel--;
      if (this.foodLevel <= 0 || this.excerciseLevel <= 0 || this.restLevel <= 0) {
        clearInterval(interval);
      }
    }, 500);
  }

  getOlder() {
    let interval = setInterval(() => {
      this.age++;
      if (this.foodLevel <= 0 || this.excerciseLevel <= 0 || this.restLevel <= 0) {
        clearInterval(interval);
      }
    }, 5000);
  }

  didTamagotchiDie() {
    let interval = setInterval(() => {
      if (this.foodLevel <= 0 || this.excerciseLevel <= 0 || this.restLevel <= 0) {
        clearInterval(interval);
        return `${this.name} has died! :(`;
      } else {
        return false;
      }
    }, 500);
  }

  feed() {
    this.foodLevel++;
    if (this.foodLevel > 100) {
      this.foodLevel = 100;
    }
  }

  excercise() {
    this.excerciseLevel++;
    if (this.excerciseLevel > 100) {
      this.excerciseLevel = 100;
    }
  }

  rest() {
    this.restLevel++;
    if (this.restLevel > 100) {
      this.restLevel = 100;
    }
  }
}