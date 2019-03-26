import $ from 'jquery';

export default class Tamagotchi {
  constructor(name) {
    this.name = name;
    this.age = 0;
    this.foodLevel = 100;
    this.excerciseLevel = 100;
    this.restLevel = 100;
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

export function callApi() {
  let request = new XMLHttpRequest();
  const url = `https://pokeapi.co/api/v2/pokemon/pikachu`;
  request.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const response = JSON.parse(this.responseText);
      getElements(response);
    }
  };
  request.open("GET", url, true);
  request.send();
  const getElements = function (response) {
    for (let i = 0; i <= 20; i++) {
      $('.showMoves').append(`<li>` + JSON.stringify(response.moves[i].move.name) + `</li>`);
    }
  };
}