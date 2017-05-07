var OfficeEscape = OfficeEscape || {};
 
OfficeEscape.Boot = function(){};
 
//setting game configuration and loading the assets for the loading screen
OfficeEscape.Boot.prototype = {
  preload: function() {
  	//assets we'll use in the loading screen
    this.load.image('gameTitle', 'assets/gameTitle.png');
    this.load.image('loading', 'assets/loading.png');
  },
  create: function() {
  	//loading screen will have a white background
    this.game.stage.backgroundColor = '#9d9d9d';
 
    //scaling options
	this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	this.scale.minWidth = 320;
	this.scale.minHeight = 480;
	this.scale.maxWidth = 1920;
	this.scale.maxHeight = 2280;
	
	//have the game centered horizontally
	this.scale.pageAlignHorizontally = true;
	this.scale.pageAlignVertically = true;
 
	//screen size will be set automatically
	this.scale.setScreenSize(true);
 
	//physics system for movement
	this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.goFullScreen();
    this.state.start('Preload');
  }
};