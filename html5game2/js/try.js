Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    // Update x with speed.
    this.x = this.x + (this.speed * dt);
    // Regenerate bugs as they exit the game on the right
    if (this.x > 505) {
        this.x = 0;

        // Generate new y for bug
        var newY = function(){
            var attempt = Math.floor(Math.random()*6)*83;
            if (attempt > 332) {
               return attempt - 83;
           } else {
                return attempt;
           }
        };
        this.y = newY();
        console.log(this.y);
        // Generate new speed for bug
        this.speed = Math.floor(Math.random() * 1200);
    }
    // Check to see if there is a collision
    function collision(playx, bugx) {
        if (bugx > playx - 50 && bugx < playx + 50) {
            return true;
        }
    }
    // Check the y value with the collision function to show collision
    if (this.y === player.y && collision(player.x, this.x)) {
    // Display alert
        sweetAlert('The bugs!', 'They are everywhere!', 'error');
    // Reset player to original position
        player.x = 200;
        player.y = 415;
    // Subtract one point
        score = score - 1;
        document.getElementById('score').innerHTML = 'Score: ' + score;
    // If the total score is -3, then make the game very easy
        if (score === -3) {
            level = level - 1;
            allEnemies = allEnemies.slice(0, 1);
    // Subtract one level
            document.getElementById('level').innerHTML = 'Level: ' + level;
        }
    // If the score drops to 2 (from 3) then remove enemies from allEnemies
    // and subtract a level
        if (score === 2) {
            allEnemies = allEnemies.slice(0, 3);
            level = level - 1;
            document.getElementById('level').innerHTML = 'Level: ' + level;
        }
    }
};