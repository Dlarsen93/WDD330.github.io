//Game logic occurs in this file.
var pokedex = document.getElementById('pokedex');

window.addEventListener("load", function(event) {

  "use strict";

  //FUNCTIONS
  var keyDownUp = function(event) {

    controller.keyDownUp(event.type, event.keyCode);

  };

  var resize = function(event) {

    display.resize(document.documentElement.clientWidth - 430, document.documentElement.clientHeight - 430, game.world.height / game.world.width);
    display.render();

  };

  var render = function() {

    display.fill(game.world.background_color);
    display.drawRectangle(game.world.player.x, game.world.player.y, game.world.player.width, game.world.player.height, game.world.player.color);
    display.drawRectangle(game.world.bulbasaur.x, game.world.bulbasaur.y, game.world.bulbasaur.width, game.world.bulbasaur.height, game.world.bulbasaur.color);
    display.drawRectangle(game.world.charmander.x, game.world.charmander.y, game.world.charmander.width, game.world.charmander.height, game.world.charmander.color);
    display.drawRectangle(game.world.squirtle.x, game.world.squirtle.y, game.world.squirtle.width, game.world.squirtle.height, game.world.squirtle.color);
    display.drawRectangle(game.world.pikachu.x, game.world.pikachu.y, game.world.pikachu.width, game.world.pikachu.height, game.world.pikachu.color);
    display.drawRectangle(game.world.mew.x, game.world.mew.y, game.world.mew.width, game.world.mew.height, game.world.mew.color);
    display.render();

  };

  var update = function() {

    //Update the Pokedex based on Pokemon choice as stored in localStorage
    if (localStorage.getItem('PokePartner') != null) {
      showPokemon(localStorage.getItem('PokePartner'));
    }
    
    //Player movement
    if (controller.left.active)  { game.world.player.moveLeft();  }
    if (controller.right.active) { game.world.player.moveRight(); }
    if (controller.up.active)    { game.world.player.moveUp(); }
    if (controller.down.active)    { game.world.player.moveDown(); }

    //Change the player's color when number keys are pressed
    if (controller.one.active || localStorage.getItem('playerColor') == null)    { game.world.player.setRed(); }
    if (controller.two.active)    { game.world.player.setGreen(); }
    if (controller.three.active)    { game.world.player.setBlue(); }
    if (controller.four.active)    { game.world.player.setYellow(); }
    if (controller.five.active)    { game.world.player.setPink(); }

    //Pokemon collision detection
    if (game.world.player.x <= game.world.bulbasaur.x + 10 && game.world.player.x >= (game.world.bulbasaur.x) - 16 && game.world.player.y <= game.world.bulbasaur.y + 10 && game.world.player.y >= (game.world.bulbasaur.y) - 16)      {localStorage.setItem('PokePartner', "https://pokeapi.co/api/v2/pokemon/1/");}
    if (game.world.player.x <= game.world.charmander.x + 10 && game.world.player.x >= (game.world.charmander.x) - 16 && game.world.player.y <= game.world.charmander.y + 10 && game.world.player.y >= (game.world.charmander.y) - 16)      {localStorage.setItem('PokePartner', "https://pokeapi.co/api/v2/pokemon/4/");}
    if (game.world.player.x <= game.world.squirtle.x + 10 && game.world.player.x >= (game.world.squirtle.x) - 16 && game.world.player.y <= game.world.squirtle.y + 10 && game.world.player.y >= (game.world.squirtle.y) - 16)      {localStorage.setItem('PokePartner', "https://pokeapi.co/api/v2/pokemon/7/");}
    if (game.world.player.x <= game.world.pikachu.x + 10 && game.world.player.x >= (game.world.pikachu.x) - 16 && game.world.player.y <= game.world.pikachu.y + 10 && game.world.player.y >= (game.world.pikachu.y) - 16)      {localStorage.setItem('PokePartner', "https://pokeapi.co/api/v2/pokemon/25/");}
    if (game.world.player.x <= game.world.mew.x + 10 && game.world.player.x >= (game.world.mew.x) - 16 && game.world.player.y <= game.world.mew.y + 10 && game.world.player.y >= (game.world.mew.y) - 16)      {localStorage.setItem('PokePartner', "https://pokeapi.co/api/v2/pokemon/151/"); game.world.mew.color = "#ff7297"}

    game.update();
  };
  

  //OBJECTS
  var controller = new Controller();
  var display    = new Display(document.querySelector("canvas"));
  var game       = new Game();
  var engine     = new Engine(1000/30, render, update);

  //INITIALIZE
  display.buffer.canvas.height = game.world.height;
  display.buffer.canvas.width = game.world.width;

  window.addEventListener("keydown", keyDownUp);
  window.addEventListener("keyup",   keyDownUp);
  window.addEventListener("resize",  resize);

  resize();

  engine.start();

});
