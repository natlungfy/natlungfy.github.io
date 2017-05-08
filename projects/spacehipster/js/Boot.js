var OfficeEscape = OfficeEscape || {};

OfficeEscape.Boot = function(){};

//setting game configuration and loading the assets for the loading screen
OfficeEscape.Boot.prototype = {
  preload: function() {
  	//assets we'll use in the loading screen
    this.load.image('preloadbar', 'assets/ui/loading.png');
  },
  create: function() {
  	//loading screen will have a white background
    this.game.stage.backgroundColor = '#9d9d9d';

    //scaling options
	this.scale.scaleMode = Phaser.ScaleManager.SHOW_all;
	
	//have the game centered horizontally
	this.scale.pageAlignVertically = true;
	this.scale.pageAlignHorizontally = true;

	//screen size will be set automatically
  this.scale.setScreenSize(true);

	//physics system for movement
	this.game.physics.startSystem(Phaser.Physics.ARCADE);
    
    this.state.start('Preload');
  }
};
