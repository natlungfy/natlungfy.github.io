/* global Phaser, gyro */

window.onload = function () {

    // game definition, 320x480
    var game = new Phaser.Game(320, 480, Phaser.CANVAS, "", {preload: onPreload, create: onCreate, update: update, render: render});

    // the player
    var player;
    var bgtile;
    var bgtileAhead;
    var bgsound;

    // function executed on preload
    function onPreload() {
        game.load.spritesheet("player", "assets/guy.png",32,64);
        game.load.spritesheet("boss","assets/boss.png",32,32);
        game.load.spritesheet("paper","assets/Paper.png",32,32);
        game.load.image("bgtile", "assets/office.png");
        game.load.audio("bgsound", "assets/sounds/mainBackground.ogg");

    }

    // function to scale up the game to full screen
    function goFullScreen() {
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.setScreenSize(true);
    }

    // function to be called when the game has been created
    function onCreate() {
        // initializing physics system
        game.physics.startSystem(Phaser.Physics.ARCADE);
        // going full screen
        goFullScreen();

        bgtile = game.add.sprite(game.world.centerX, game.world.centerY, "bgtile");
        bgtile.anchor.setTo(0.5, 0.5);
        bgtileAhead = game.add.sprite(game.world.centerX, -game.world.centerY, "bgtile");
        bgtileAhead.anchor.setTo(0.5, 0.5);

        bgsound = new Phaser.Sound(game,"bgsound",1,true); //true means looping is enabled.
        setTimeout(function() {bgsound.play();},100);

        // adding the player on stage
        player = game.add.sprite(160, 240, "player");
        player.frame = 0;
        player.animations.add('playerRun', [0, 1], 8, true);
        player.animations.play('playerRun');

        // // adding Boss obstacle on the stage
        // boss = game.add.sprite(160,480, "boss");
        // boss.frame = 0;
        // boss.animations.add('bossRun', [0,1,2,3],5,true);
        // player.animations.play('bossRun');

        // // adding Paper obstacle on the stage
        // paper = game.add.sprite(100,480, "paper");
        // paper.frame = 0;
        // paper.animations.add('paperChange', [0,1,2],5,true);
        // paper.animations.play('paperChange');
        
        // setting player anchor point
        player.anchor.setTo(0.5, -1.5);
        // enabling physics car.body.collideWorldBounds = true;
        game.physics.enable(player, Phaser.Physics.ARCADE);
        //game.time.events.repeat(Phaser.Timer.SECOND * 2, 10, createBall, this);
        // the player will collide with bounds
        player.body.collideWorldBounds = true;
        // setting player bounce
        player.body.bounce.set(0.0);
        // setting gyroscope update frequency
        gyro.frequency = 5;
        // start gyroscope detection
        gyro.startTracking(function (o) {
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
            //player.x = 160 + o.gamma * 2;
            //player.y = 240 + o.beta * 2;
        });
    }

    function update() {
        bgtile.y += 2;
        bgtileAhead.y += 2;
        if(bgtile.y > game.world.centerY * 3 - 1){
            bgtile.y = -game.world.centerY + 1;
        }
        if(bgtileAhead.y > game.world.centerY * 3 - 1){
            bgtileAhead.y = -game.world.centerY + 1;
        }
    }
    
    function render() {
        game.debug.spriteInfo(player, 32, 32);
        game.debug.text('Elapsed seconds: ' + game.time.totalElapsedSeconds(), 32, 32);
    }
};