import Tamagotchi from "../src/js/tamagotchi";
import $ from 'jquery';
import 'bootstrap';
import './styles.css';

$(document).ready(function () {
  $('#bulbasaurForm').submit(function(event) {
    event.preventDefault();
    const pokemon = $("#bulbasaur").val();
    $('#eggSelection').hide();
    $('#game').show();
    console.log(pokemon);
  });
  $('#charmanderForm').submit(function(event) {
    event.preventDefault();
    const pokemon = $("#charmander").val();
    $('#eggSelection').hide();
    $('#game').show();
    console.log(pokemon);
  });
  $('#squirtleForm').submit(function(event) {
    event.preventDefault();
    const pokemon = $("#squirtle").val();
    $('#eggSelection').hide();
    $('#game').show();
    console.log(pokemon);
  });
  $('#nameForm').submit(function (event) {
    event.preventDefault();
    let tamagotchiName = $("#tamagotchiName").val();
    let newTamagotchi = new Tamagotchi(tamagotchiName);
    $('.showMoves').show();
    newTamagotchi.getOlder();
    $('.hidden').show();
    $('#pichu').show();
    $('#nameForm').hide();
    $('.name').text(newTamagotchi.name);
    newTamagotchi.setHunger();
    newTamagotchi.setExcercise();
    newTamagotchi.setRest();
    setInterval(function(){
      newTamagotchi.checkAgeForApi();
    }, 500);
    setInterval(function () {
      $('#age').text(newTamagotchi.age);
      $('#foodLevels').text(newTamagotchi.foodLevel);
      $('#excerciseLevels').text(newTamagotchi.excerciseLevel);
      $('#restLevels').text(newTamagotchi.restLevel);
      $('#dead').text(newTamagotchi.didTamagotchiDie());
      if (newTamagotchi.foodLevel <= 0 || newTamagotchi.excerciseLevel <= 0 || newTamagotchi.restLevel <= 0) {
        $('#dead').show();
        $('#buttons').hide();
        $('.showMoves').hide();
      } else if (newTamagotchi.age >= 10 && newTamagotchi.age < 30) {
        $('#pikachu').show();
        $('#pichu').hide();
      } else if (newTamagotchi.age >= 30 && newTamagotchi.age < 50) {
        $('#raichu').show();
        $('#pikachu').hide();
      } else if (newTamagotchi.age >= 50) {
        $('#raichuOld').show();
        $('#raichu').hide();
      }
    }, 150);
    $('#feed').click(function (event) {
      event.preventDefault();
      newTamagotchi.feed();
      $('#foodLevels').text(newTamagotchi.foodLevel);
    });
    $('#workout').click(function (event) {
      event.preventDefault();
      newTamagotchi.excercise();
      $('#excerciseLevels').text(newTamagotchi.excerciseLevel);
    });
    $('#nap').click(function (event) {
      event.preventDefault();
      newTamagotchi.rest();
      $('#restLevels').text(newTamagotchi.restLevel);
    });
  });
});