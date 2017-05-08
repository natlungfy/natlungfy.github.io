var OfficeEscape = OfficeEscape || {};
 
OfficeEscape.Boot = function(){};
 
//setting game configuration and loading the assets for the loading screen
OfficeEscape.Boot.prototype = {
  preload: function() {
  	//assets we'll use in the loading screen
    this.load.image('gameTitle', 'assets/ui/gameTitle.png');
    this.load.image('loading', 'assets/ui/loading.png');
  },
  create: function() {
  	//loading screen will have a white background
    this.game.stage.backgroundColor = '#9d9d9d';

    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;
    this.scale.setScreenSize(true);
 
	//screen size will be set automatically
	this.scale.setScreenSize(true);
 
	//physics system for movement
	this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.state.start('Preload');
  }
};