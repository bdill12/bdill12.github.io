(function(global) {
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
    this.speed = Math.floor(Math.random() * (1000 - 300) + 300);

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
                //$('#oops').hide();
                active = true;
            }, 1000);
        } else {
           // $('.canvas').hide();
           // $('#gameOver').show();
        }
        //document.getElementById('lives').innerHTML = player.lives;
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
    this.sprite = 'app/project/game/images/kenzie.png';
    this.x = 200;
    this.y = 415;
    this.lives = 5;

};
//Global variables i
var prize = ['app/project/game/images/shoes/skates.png',
    'app/project/game/images/shoes/rain.png',
    'app/project/game/images/shoes/clown.png',
    'app/project/game/images/shoes/oxfords.png',
    'app/project/game/images/shoes/thighs.png',
    'app/project/game/images/shoes/rubyred.png'
];
var enemies = ['app/project/game/images/bug-green.png', 'app/project/game/images/bug-pink.png'];
var i = 0;
var bug = 0;
var lives = 5;
//var shoes = document.querySelectorAll('.shoes');
var active = true;



Player.prototype.update = function(dt) {
    // If the player leaves the edges of the board, return it to original position
    if (this.x < 0 || this.x >= 505 || this.y > 606 || this.y < 0) {
        this.x = 200;
        this.y = 415;
    }
    // If the player makes it to the shoes, display alert
    if (this.y == shoes.y && this.x == shoes.x) {
        active = false;
        // Reset player
        this.x = 200;
        this.y = 415;
        // $('#empty').hide();
        //  shoes[i].style.display = "block";
        i = i + 1;
        if (i == 6) {
            active = false;
            //     $('#win').show();
            i = 0;
        } else {
            shoes.sprite = prize[i];
            shoes.x = Math.floor(Math.random() * 5) * 100;
            active = true;
        }
    }
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(key) {
    console.log(key + ', y: ' + this.y + ', x: ' + this.x);

    if (key === 'right') {
        this.x = this.x + 100;
        console.log(this.x);
    }
    if (key === 'left') {
        this.x = this.x - 100;
        console.log(this.x);
    }
    if (key === 'up') {
        this.y = this.y - 83;
        console.log(this.y);
    }
    if (key === 'down') {
        this.y = this.y + 83;
        console.log(this.y);

    }
};

var Shoes = function() {
    this.sprite = prize[i];
    this.x = Math.floor(Math.random() * 5) * 100;
    this.y = 0;
};

Shoes.prototype.render = function() {
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
global.allEnemies = [enemy1, enemy2, enemy3];

// Place the shoes in a variable called shoes
global.shoes = new Shoes();
// Place the player object in a variable called player
global.player = new Player();

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
    } else {
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
})(this);
