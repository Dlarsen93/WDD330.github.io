//This file handles input.
const Controller = function() {

  this.left  = new Controller.ButtonInput();
  this.right = new Controller.ButtonInput();
  this.up    = new Controller.ButtonInput();
  this.down  = new Controller.ButtonInput();
  this.one   = new Controller.ButtonInput();
  this.two   = new Controller.ButtonInput();
  this.three = new Controller.ButtonInput();
  this.four  = new Controller.ButtonInput();
  this.five  = new Controller.ButtonInput();

  this.keyDownUp = function(type, key_code) {

    var down = (type == "keydown") ? true : false;

    switch(key_code) {

      case 37: this.left.getInput(down);  break;
      case 38: this.up.getInput(down);    break;
      case 39: this.right.getInput(down); break;
      case 40: this.down.getInput(down);  break;
      case 49: this.one.getInput(down);   break;
      case 50: this.two.getInput(down);   break;
      case 51: this.three.getInput(down); break;
      case 52: this.four.getInput(down);  break;
      case 53: this.five.getInput(down);  break;

    }

  };

};

Controller.prototype = {

  constructor : Controller

};

Controller.ButtonInput = function() {

  this.active = this.down = false;

};

Controller.ButtonInput.prototype = {

  constructor : Controller.ButtonInput,

  getInput : function(down) {

    if (this.down != down) this.active = down;
    this.down = down;

  }

};
