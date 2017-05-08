var SpaceHipster = SpaceHipster || {};

//loading the game assets
SpaceHipster.Preload = function(){};

SpaceHipster.Preload.prototype = {
  preload: function() {
  	//show loading screen
  	this.splash = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
    this.splash.anchor.setTo(0.5);

    this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY + 128, 'preloadbar');
    this.preloadBar.anchor.setTo(0.5);

    this.load.setPreloadSprite(this.preloadBar);

  	//load game assets
    this.load.image('bgtile','assets/ui/office.png');
  	this.load.image('gameOver', 'assets/ui/gameOver.png');
  	this.load.image('gameOverButton', 'assets/ui/startOverButton.png');
    this.load.spritesheet('player', 'assets/guy.png', 32, 64);
    this.load.spritesheet('boss', 'assets/Boss.png', 32, 32);
    this.load.spritesheet('paper','assets/Paper.png',32,32);
    this.load.audio('bgsound', 'assets/sounds/mainBackground.ogg');
    this.load.audio('win', 'assets/sounds/win.wav');
  },
  create: function() {
  	this.state.start('MainMenu');
  }
};