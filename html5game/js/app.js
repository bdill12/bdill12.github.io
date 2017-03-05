// Enemies our player must avoid
var Enemy = function(x, y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    bug = bug + 1;
    if (bug > 1) {
        bug = 0;
    }
    this.sprite = enemies[bug];
    // Generate random number up to 505 for x
    this.x = Math.ceil(Math.random() * 505);
    // Generate multiple of 83 for y
    this.y = Math.floor(Math.random() * (5 - 2) + 2) * 83;
    // Generate a random speed
    this.speed = Math.floor(Math.random() * (800 - 300) + 300);

};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    // Update x with speed.
    this.x = this.x + (this.speed * dt);
    // Regenerate bugs as they exit the game on the right
    if (this.x > 505) {
        this.x = 0;
        // Generate multiple of 83 for y
        this.y = Math.floor(Math.random() * (5 - 2) + 2) * 83;
        // Generate a random speed
        this.speed = Math.floor(Math.random() * (1000 - 300) + 300);
    }
    // Check to see if there is a collision
    function collision(playx, bugx) {
        if (bugx > playx - 50 && bugx < playx + 50) {
            return true;
        }
    }
    // Check the y value with the collision function to show collision
    if (this.y === player.y && collision(player.x, this.x)) {
        active = false;
        player.x = 200;
        player.y = 415;
        player.lives = player.lives - 1;
        if (player.lives >= 1) {
            $('#oops').show();
            window.setTimeout(function() {
                $('#oops').hide();
                active = true;
            }, 1000);
        } else {
            $('.canvas').hide();
            $('#gameOver').show();
            resetAllow = true;
        }
        document.getElementById('lives').innerHTML = player.lives;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    // Use array in order to change the children as they are saved.
    this.sprite = 'images/kenzie.png';
    this.x = 200;
    this.y = 415;
    this.lives = 5;

};
//Global variables i
var prize = ['images/shoes/skates.png',
    'images/shoes/rain.png',
    'images/shoes/clown.png',
    'images/shoes/oxfords.png',
    'images/shoes/thighs.png',
    'images/shoes/rubyred.png'
];
var enemies = ['images/bug-green.png', 'images/bug-pink.png'];
var i = 0;
var bug = 0;
var lives = 5;
var active = true;
var resetAllow = true;
var playerReset = function() {
    player.x = 200;
    player.y = 415;
};
var gems = document.querySelector('.gems');


Player.prototype.update = function(dt) {
    // If the player leaves the edges of the board, return it to original position
    if (this.x < 0 || this.x >= 505 || this.y > 606 || this.y < 0) {
        // Reset player
        this.x = 200;
        this.y = 415;
    }
    // If the player makes it to the gem, display alert
    if (this.y == gem.y && this.x == gem.x) {
        active = false;
        $('#shoes' + i).show();
        $('#collect').show();
         // Reset player
        this.x = 200;
        this.y = 415;
        window.setTimeout(function() {
                $('#collect').hide();
                active = true;
        }, 500);
        i++;
        if (i == 6) {
            active = false;
            $('#win').show();
            resetAllow = true;
        } else {
            gem.sprite = prize[i];
            gem.x = Math.floor(Math.random() * 5) * 100;
            active = true;
        }
    }
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(key) {
    if (key === 'right') {
        this.x = this.x + 100;
    }
    if (key === 'left') {
        this.x = this.x - 100;
    }
    if (key === 'up') {
        this.y = this.y - 83;
    }
    if (key === 'down') {
        this.y = this.y + 83;
    }
};

var Gem = function() {
    this.sprite = prize[i];
    this.x = Math.floor(Math.random() * 5) * 100;
    this.y = 0;
};

Gem.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

var arrowUp = function() {
    player.y = player.y - 83;
};
var arrowDown = function() {
    player.y = player.y + 83;
};
var arrowLeft = function() {
    player.x = player.x - 100;
};
var arrowRight = function() {
    player.x = player.x + 100;
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var enemy1 = new Enemy();
var enemy2 = new Enemy();
var enemy3 = new Enemy();
var allEnemies = [enemy1, enemy2, enemy3];

// Place the gem in a variable called gem
var gem = new Gem();
// Place the player object in a variable called player
var player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    e.preventDefault();
    if (active) {
        var allowedKeys = {
            37: 'left',
            38: 'up',
            39: 'right',
            40: 'down'
        };
        player.handleInput(allowedKeys[e.keyCode]);
    }
    if (resetAllow) {
        if (e.keyCode == 13) {
            reset();
        }
    }

});
document.addEventListener('keydown', function(e) {
    e.preventDefault();

});

$('#up').on('vclick', function() {
    player.handleInput('up');
});
$('#left').on('vclick', function() {
    player.handleInput('left');
});
$('#right').on('vclick', function() {
    player.handleInput('right');
});
$('#down').on('vclick', function() {
    player.handleInput('down');
});
