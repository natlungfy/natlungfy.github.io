var OfficeEscape = OfficeEscape || {};

OfficeEscape.game = new Phaser.Game(320, 480, Phaser.AUTO, '');

OfficeEscape.game.state.add('Boot', OfficeEscape.Boot);
OfficeEscape.game.state.add('Preload', OfficeEscape.Preload);
OfficeEscape.game.state.add('MainMenu', OfficeEscape.MainMenu);
OfficeEscape.game.state.add('Game', OfficeEscape.Game);

OfficeEscape.game.state.start('Boot');