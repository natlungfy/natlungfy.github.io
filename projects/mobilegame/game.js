var OfficeEscape = OfficeEscape || {};
 
//title screen
OfficeEscape.Game = function(){};
 
OfficeEscape.Game.prototype = {
  create: function() {
  	this.game.world.setBounds(0, 0, 320, 480);
this.background = this.game.add.tileSprite(0, 0, this.game.world.width, this.game.world.height, 'bgtile');
  this.background.autoScroll(0, -20);
  this.player = this.game.add.sprite(160, 240, "guy");
  this.player.animations.add('run', [0, 1], 3, true);
this.player.animations.play('run');
this.playerScore = 0;
        this.player.anchor.setTo(0.5, -1.5);
        // enabling physics car.body.collideWorldBounds = true;
        this.game.physics.enable(player, Phaser.Physics.ARCADE);
        // the player will collide with bounds
        this.player.body.collideWorldBounds = true;
        // setting player bounce
        this.player.body.bounce.set(0.0);
        // setting gyroscope update frequency
        this.gyro.frequency = 5;
        // start gyroscope detection
        this.gyro.startTracking(function (o) {
            // updating player velocity
            //player.body.velocity.x += o.gamma / 20; // TODO, CHANGE THIS
            //player.body.velocity.y += o.beta / 20;
            
            if(!(o.gamma > 45||o.gamma < -45)){
                player.x = 164 + o.gamma * 2;
            }else{
                if(o.gamma > 0){
                    player.x = 254;
                }else{
                    player.x = 74
                }
            }
            
            if(!(o.beta > 45||o.beta < -45)){
                player.y = 230 + o.beta * 2;
            }else{
                if(o.beta > 0){
                    player.y = 320;
                }else{
                    player.y = 140; 
                }
            }
            //player.x = 160 + o.gamma * 2;
            //player.y = 240 + o.beta * 2;
        });
  },
  update: function() {

  	this.mainSound = this.game.add.audio('mainSound');
this.win = this.game.add.audio('win');
this.lose = this.game.add.audio('lose');

  },
};