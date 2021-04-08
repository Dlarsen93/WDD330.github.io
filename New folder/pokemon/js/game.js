//Player and Pokemon objects, as well as their functions, are defined in this file.
const Game = function() {

  this.world = {

    background_color:"rgba(40,48,56,0.25)",

    friction:0.9,

    player:new Game.Player(),
    bulbasaur:new Game.Bulbasaur(),
    charmander:new Game.Charmander(),
    squirtle:new Game.Squirtle(),
    pikachu:new Game.Pikachu(),
    mew:new Game.Mew(),

    height:72,
    width:128,

    //Keep the player from going past walls
    collideObject:function(object) {

      if (object.x < 0) { object.x = 0; object.velocity_x = 0; }
      else if (object.x + object.width > this.width) { object.x = this.width - object.width; object.velocity_x = 0; }
      if (object.y < 0) { object.y = 0; object.velocity_y = 0; }
      else if (object.y + object.height > this.height) { object.y = this.height - object.height; object.velocity_y = 0; }

    },

    update:function() {

      
      this.player.update();

      this.player.velocity_x *= this.friction;
      this.player.velocity_y *= this.friction;

      this.collideObject(this.player);

    }

  };

  this.update = function() {

    this.world.update();

  };

};

Game.prototype = { constructor : Game };

//Player and Pokemon values
Game.Player = function(x, y) {

  this.color      = "#ff0000";
  this.height     = 16;
  this.jumping    = true;
  this.velocity_x = 0;
  this.velocity_y = 0;
  this.width      = 16;
  this.x          = 57;
  this.y          = 50;

};

Game.Bulbasaur = function(x, y) {
  this.color = "#00ff44";
  this.height = 10;
  this.width      = 10;
  this.x          = 30;
  this.y          = 10;
};

Game.Charmander = function(x, y) {
  this.color = "#ff5511";
  this.height = 10;
  this.width      = 10;
  this.x          = 60;
  this.y          = 10;
};

Game.Squirtle = function(x, y) {
  this.color = "#1177ff";
  this.height = 10;
  this.width      = 10;
  this.x          = 90;
  this.y          = 10;
};

Game.Pikachu = function(x, y) {
  this.color = "#ffd900";
  this.height = 10;
  this.width      = 10;
  this.x          = 3;
  this.y          = 59;
};

Game.Mew = function(x, y) {
  this.color = "#262e39";
  this.height = 10;
  this.width      = 10;
  this.x          = 115;
  this.y          = 59;
};

//Player prototype. Contains the constructor and functions.
Game.Player.prototype = {

  constructor : Game.Player,

  //Make the player move
  moveLeft:function()  { this.velocity_x -= 0.5; },
  moveRight:function() { this.velocity_x += 0.5; },
  moveUp:function() { this.velocity_y -= 0.5;},
  moveDown:function() { this.velocity_y += 0.5;},

  //Player's color is saved in localStorage
  setRed:function() { localStorage.setItem('playerColor', "red"); },
  setGreen:function() { localStorage.setItem('playerColor', "green"); },
  setBlue:function() { localStorage.setItem('playerColor', "blue"); },
  setYellow:function() { localStorage.setItem('playerColor', "yellow"); },
  setPink:function() { localStorage.setItem('playerColor', "#ff3c6f"); },

  update:function() {

    this.color = localStorage.getItem('playerColor'); //Player's color choice is remembered between sessions
    this.x += this.velocity_x;
    this.y += this.velocity_y;

  }

};

//Pokemon Prototypes. All they need is a constructor.
Game.Bulbasaur.prototype = {
  constructor : Game.Bulbasaur
};

Game.Charmander.prototype = {
  constructor : Game.Charmander
};

Game.Squirtle.prototype = {
  constructor : Game.Squirtle
};

Game.Pikachu.prototype = {
  constructor : Game.Pikachu
};

Game.Mew.prototype = {
  constructor : Game.Mew
};
