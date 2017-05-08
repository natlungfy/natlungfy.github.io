var OfficeEscape = OfficeEscape || {};

//loading the game assets
OfficeEscape.Preload = function(){};

OfficeEscape.Preload.prototype = {
  preload: function() {
  	//show loading screen
    this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'preloadbar');
    this.preloadBar.anchor.setTo(0.5);

    this.load.setPreloadSprite(this.preloadBar);

  	//load game assets
    this.load.image('gameTitle', 'assets/ui/gameTitle.png');
    this.load.image('bgtile','assets/office.png');
  	this.load.image('gameOver', 'assets/ui/gameOver.png');
  	this.load.image('gameOverButton', 'assets/ui/startOverButton.png');
    this.load.spritesheet('player', 'assets/guy.png', 32, 64);
    this.load.spritesheet('boss', 'assets/Boss.png', 32, 32);
    this.load.spritesheet('paper', 'assets/Paper.png', 32, 32);
    this.load.audio('bgsound', 'assets/sounds/mainBackground.ogg');
    this.load.audio('win', 'assets/sounds/win.wav');
  },
  create: function() {
  	this.state.start('MainMenu');
  }
};