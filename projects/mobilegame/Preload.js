var OfficeEscape = OfficeEscape || {};
OfficeEscape.Preload = function(){};
 
OfficeEscape.Preload.prototype = {
  preload: function() {
  	//show logo in loading screen
    this.bgtile = this.add.sprite(this.game.world.centerX, this.game.world.centerY, "bgtile");
    this.bgtile.anchor.setTo(0.5, 0.5);
 
    this.loading = this.add.sprite(this.game.world.centerX, this.game.world.centerY + 128, 'loading');
    this.loading.anchor.setTo(0.5);

 
//loading the game assets
    this.load.setPreloadSprite(this.loading);
 
  	//load game assets
    this.load.image("bgtile", "office.png");
  	this.load.image('gameOverTitle', 'assets/gameOver.png');
  	this.load.image('playButton', 'assets/playButton.png');
  	this.load.image('startOverButton', 'assets/startOverButton.png');
    this.load.spritesheet('guy', 'mainCharacter/walk_up.png', 32, 64);
    this.load.audio('mainSound', 'sounds/mainBackground.ogg');
    this.load.audio('win', 'sounds/win.wav');
    this.load.audio('lose','sounds/lose.wav');
  },
  create: function() {
  	this.state.start('MainMenu');
  }
};