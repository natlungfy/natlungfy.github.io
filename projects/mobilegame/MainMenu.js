OfficeEscape.MainMenu = function(){};
 
OfficeEscape.MainMenu.prototype = {
  create: function() {
  	//show the space tile, repeated
    this.background = this.game.add.sprite(0, 0, this.game.width, this.game.height, 'bgtile');
    //give it speed in y
    this.background.autoScroll(0, -20);
 
    //start game text
    var text = "Tap to begin";
    var style = { font: "30px Arial", fill: "#fff", align: "center" };
    var t = this.game.add.text(this.game.width/2, this.game.height/2, text, style);
    t.anchor.set(0.5);
 
    //highest score
    text = "Highest score: "+this.highestScore;
    style = { font: "15px Arial", fill: "#fff", align: "center" };
  
    var h = this.game.add.text(this.game.width/2, this.game.height/2 + 50, text, style);
    h.anchor.set(0.5);
  },
  update: function() {
    if(this.game.input.activePointer.justPressed()) {
      this.game.state.start('Game');
    }
  }
};