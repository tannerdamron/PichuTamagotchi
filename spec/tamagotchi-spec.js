import  Tamagotchi  from '../src/js/tamagotchi.js';

describe('Tamagotchi', function () {
  let tan = new Tamagotchi("Tan");

  beforeEach(function () {
    jasmine.clock().install();
    tan.setHunger();
    tan.setExcercise();
    tan.setRest();
  });

  afterEach(function () {
    jasmine.clock().uninstall();
  });

  it('should have a name and a food level of 100 when it is created', function () {
    expect(tan.name).toEqual("Tan");
    expect(tan.foodLevel).toEqual(100);
  });


  it('should have a food level of 94 after 3001 milliseconds', function () {
    jasmine.clock().tick(3001);
    expect(tan.foodLevel).toEqual(94);
  });

  it('should get very hungry if the food level drops below zero', function () {
    let tan = new Tamagotchi("Tan");
    tan.foodLevel = 0;
    console.log(tan.didTamagotchiDie());
    expect(tan.foodLevel).toEqual(`Tan has died! :(`);
  });

  it('should get very hungry if 100 seconds pass without feeding', function () {
    let tan = new Tamagotchi("Tan");
    jasmine.clock().tick(100001);
    expect(tan.didTamagotchiDie()).toEqual(`Tan has died! :(`);
  });

  it('should have a food level of 100 if it is fed', function(){
    let tan = new Tamagotchi("Tan");
    jasmine.clock().tick(1001);
    tan.feed();
    expect(tan.foodLevel).toEqual(100);
  });
});