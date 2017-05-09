var OfficeEscape = OfficeEscape || {};
 
//title screen
OfficeEscape.Game = function(){};
 
OfficeEscape.Game.prototype = {
  create: function() {
  	this.game.world.setBounds(0, 0, 320, 480);
        this.bgTile = this.game.add.tileSprite(this.game.world.centerX, this.game.world.centerY, "bgtile");
        this.bgtile.anchor.setTo(0.5, 0.5);
        this.bgtileAhead = this.game.add.sprite(this.game.world.centerX, -this.game.world.centerY, "bgtile");
        this.bgtileAhead.anchor.setTo(0.5, 0.5);
  this.player = this.game.add.sprite(160, 240, "guy");
  this.player.animations.add('run', [0, 1], 3, true);
this.player.animations.play('run');
this.playerScore = 0;
        this.player.anchor.setTo(0.5, -1.5);
        // enabling physics car.body.collideWorldBounds = true;
        this.game.physics.enable(this.player, Phaser.Physics.ARCADE);
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
            this.mainSound = this.game.add.audio('mainSound');
this.win = this.game.add.audio('win');
this.lose = this.game.add.audio('lose');
            this.mainSound.play();
  },
  update: function() {

  },
};