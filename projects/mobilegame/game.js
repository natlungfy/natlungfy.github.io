/* global Phaser, gyro */

window.onload = function () {

    // game definition, 320x480
    var game = new Phaser.Game(320, 480, Phaser.CANVAS, "", {preload: onPreload, create: onCreate, update: update, render: render});

    // the player
    var boss;
    var paper;
    var player;
    var bgtile;
    var bgsound;
    var score;
    var gameOver;
    var hit;
    // var score = 0;
    // var scoreText;
    var timer;
    var total = 0;
    
    // function executed on preload
    function onPreload() {
        game.load.spritesheet("player", "assets/mainchar.png",32,64);
        game.load.spritesheet("boss","assets/Boss.png",32,32);
        game.load.spritesheet("paper","assets/Paper.png",32,32);
        game.load.image("bgtile", "assets/office.png");
        game.load.image("gameOver", "assets/ui/gameOver.png")
        game.load.audio("bgsound", ["assets/sounds/mainBackground.ogg","assets/sounds/mainBackground.mp3", "assets/sounds/mainBackground.m4a"]);
        game.load.audio("hit", ['assets/sounds/hit.ogg',"assets/sounds/hit.mp3","assets/sounds/hit.m4a"]);

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

        bgtile = game.add.tileSprite(0,0,320,480, "bgtile");

        bgsound = game.add.audio("bgsound"); //true means looping is enabled.
        bgsound.play();

        // adding the player on stage
        player = game.add.sprite(160, 320, "player");
        player.frame = 0;
        player.animations.add('playerRun', [0, 1], 8, true);
        player.animations.play('playerRun');
        
        //Set Gravity
        game.physics.arcade.gravity.y = 150;
        // setting player anchor point
        player.anchor.setTo(0.5, -1.5);
        // enabling physics car.body.collideWorldBounds = true;
        game.physics.enable(player, Phaser.Physics.ARCADE);
        // the player will collide with bounds
        player.body.collideWorldBounds = true;
        // setting player bounce
        player.body.bounce.set(0.0);

        // setting gyroscope update frequency
        gyro.frequency = 5;
        // start gyroscope detection
        gyro.startTracking(function (o) {
            
            //Player's position confined to the bounds of the background
            if(!(o.gamma > 45||o.gamma < -45)){
                player.x = 164 + o.gamma * 2;
            }else{
                if(o.gamma > 0){
                    player.x = 254;
                }else{
                    player.x = 74
                }
            }
            //Player's position set to the bottom of the screen.
            player.y = 320;
        });

        timer = game.time.create(false);
        timer.loop(2000, this.updateCounter, this);
        timer.start();

        //Random spawns of enemies.
        game.time.events.repeat(Phaser.Timer.SECOND * 10, 60, this.newBoss, this);
        game.time.events.repeat(Phaser.Timer.SECOND * 3, 2400, this.newPaper, this);
    }

    function updateCounter() {
        total++;
    }
    
    function newBoss() {
        // adding Boss obstacle on the stage
        var random = game.rnd.integerInRange(74, 254);
        boss = game.add.sprite(random, 0, "boss");
        game.physics.enable(boss, Phaser.Physics.ARCADE);
        boss.body.collideWorldBounds = false;
        //Update boss size
        boss.scale.setTo(2);
        boss.frame = 0;
    }
    function newPaper(){
        // adding Paper obstacle on the stage
        var random = game.rnd.integerInRange(74, 254);
        paper = game.add.sprite(random, 0, "paper");
        game.physics.enable(paper, Phaser.Physics.ARCADE);
        paper.body.collideWorldBounds = false;
        paper.frame = 0;
    }
    function handleCollision(){
        //player.animations.stop('playerRun', true);
        player.animations.add('die',[3,4,5],4,false);
        player.animations.play('die');
        gameOver = game.add.sprite(game.world.centerX-120, game.world.centerY-100, "gameOver");
        hit = game.add.audio('hit');
        hit.play();
        game.physics.arcade.gravity.y = 0;
        //timer.stop();
    }

    function update() {
        bgtile.tilePosition.y += 2;
        game.physics.arcade.collide(player, boss, handleCollision);
        game.physics.arcade.collide(player, paper, handleCollision);
    }

function render() {
        game.debug.text('Score: ' + total*1000, 64, 64);
       
    }
}