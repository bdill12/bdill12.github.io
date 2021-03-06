// Enemies our player must avoid
var Enemy = function(x, y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    if (mobile) {
        bug = bug + 1;
        if (bug > 1) {
            bug = 0;
        }
        this.sprite = enemies[bug];
        // Generate random number up to 505 for x
        this.x = Math.ceil(Math.random() * 375);
        // Generate multiple of 83 for y
        this.y = Math.floor(Math.random() * (4 - 2) + 2) * 61;
        // Generate a random speed
        this.speed = Math.floor(Math.random() * (300 - 100) + 100);

    } else {
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
    }

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
    if (this.x > 505 || this.x > 375 && mobile) {
        this.x = 0;
        if (mobile) {
            // Generate multiple of 83 for y
            this.y = Math.floor(Math.random() * (5 - 2) + 2) * 61;
            // Generate a random speed
            this.speed = Math.floor(Math.random() * (400 - 100) + 100);

        } else {
            // Generate multiple of 83 for y
            this.y = Math.floor(Math.random() * (5 - 2) + 2) * 83;
            // Generate a random speed
            this.speed = Math.floor(Math.random() * (1000 - 300) + 300);
        }
    }
    // Check to see if there is a collision
    function collision(playx, bugx) {
        if (mobile) {
            if (bugx > playx - 25 && bugx < playx + 25) {
                return true;
            }
        } else {
            if (bugx > playx - 50 && bugx < playx + 50) {
                return true;
            }
        }
    }
    // Check the y value with the collision function to show collision
    if (this.y === player.y && collision(player.x, this.x)) {
        active = false;
        playerReset();
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
    if (mobile) {
        this.sprite = 'images/small/char-boy-ninja.png';
        this.x = 142;
        this.y = 305;
    } else {
        this.sprite = 'images/kenzie.png';
        this.x = 200;
        this.y = 415;
    }
    this.lives = 5;

};
//Global variables i
var prize = ['images/shoes/skates.png',
            'images/shoes/rain.png',
            'images/shoes/clown.png',
            'images/shoes/oxfords.png',
            'images/shoes/thighs.png',
            'images/shoes/rubyred.png'];
var enemies = ['images/bug-green.png', 'images/bug-pink.png'];
var i = 0;
var bug = 0;
var lives = 5;
var gems = document.querySelectorAll('.gems');
var active = true;
var mobile = false;
var canvasWidth = 505;
var canvasHeight = 606;
var prizeMobile = ['images/shoes/skates.png',
            'images/shoes/rain.png',
            'images/shoes/clown.png',
            'images/shoes/oxfords.png',
            'images/shoes/thighs.png',
            'images/shoes/rubyred.png'];
var playerReset = function() {
    if (mobile) {
        player.x = 142;
        player.y = 305;
    } else {
        player.x = 200;
        player.y = 415;
    }

};


Player.prototype.update = function(dt) {
    // If the player leaves the edges of the board, return it to original position
    if (this.x < 0 || this.x >= canvasWidth || this.y > canvasHeight || this.y < 0) {
        playerReset();
    }
    // If the player makes it to the gem, display alert
    if (this.y == gem.y && this.x == gem.x) {
        active = false;
        // Reset player
        playerReset();
        //this.x = 200;
        //this.y = 415;
        $('#empty').hide();
        gems[i].style.display = "block";
        i = i + 1;
        if (i == 6) {
            active = false;
            $('#win').show();
            i = 0;
        } else {
            if (mobile) {
                gem.sprite = prizeMobile[i];
                gem.x = Math.floor(Math.random() * 5) * 71;
            } else {
                gem.sprite = prize[i];
                gem.x = Math.floor(Math.random() * 5) * 100;
            }
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
        if (mobile) {
            this.x = this.x + 71;
        } else {
            this.x = this.x + 100;
        }
        console.log(this.x);
    }
    if (key === 'left') {
        if (mobile) {
            this.x = this.x - 71;
        } else {
            this.x = this.x - 100;
        }
        console.log(this.x);

    }
    if (key === 'up') {
        if (mobile) {
            this.y = this.y - 61;
        } else {
            this.y = this.y - 83;
        }
        console.log(this.y);

    }
    if (key === 'down') {
        if (mobile) {
            this.y = this.y + 61;
        } else {
            this.y = this.y + 83;
        }
        console.log(this.y);

    }
};

var Gem = function() {
    if (mobile) {
        this.sprite = prizeMobile[i];
        this.x = Math.floor(Math.random() * 5) * 71;

    } else {
        this.sprite = prize[i];
        this.x = Math.floor(Math.random() * 5) * 100;
    }
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
