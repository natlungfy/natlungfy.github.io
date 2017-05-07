var OfficeEscape = OfficeEscape || {}; 
OfficeEscape.game = new Phaser.Game(320, 480, Phaser.AUTO, "");
SpaceHipster.game.state.add('Boot', OfficeEscape.Boot);
SpaceHipster.game.state.add('Preload', OfficeEscape.Preload);
SpaceHipster.game.state.add('MainMenu', OfficeEscape.MainMenu);
SpaceHipster.game.state.add('Game', OfficeEscape.Game);
 
SpaceHipster.game.state.start('Boot');