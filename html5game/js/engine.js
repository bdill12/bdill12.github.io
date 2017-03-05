/* Engine.js
 * This file provides the game loop functionality (update entities and render),
 * draws the initial game board on the screen, and then calls the update and
 * render methods on your player and enemy objects (defined in your app.js).
 *
 * A game engine works by drawing the entire game screen over and over, kind of
 * like a flipbook you may have created as a kid. When your player moves across
 * the screen, it may look like just that image/character is moving or being
 * drawn but that is not the case. What's really happening is the entire "scene"
 * is being drawn over and over, presenting the illusion of animation.
 *
 * This engine is available globally via the Engine variable and it also makes
 * the canvas' context (ctx) object globally available to make writing app.js
 * a little simpler to work with.
 */

var Engine = (function(global) {
    /* Predefine the variables we'll be using within this scope,
     * create the canvas element, grab the 2D context for that canvas
     * set the canvas elements height/width and add it to the DOM.
     */
    var doc = global.document,
        win = global.window,
        canvas = doc.createElement('canvas'),
        ctx = canvas.getContext('2d'),
        lastTime;
    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };
    if (isMobile.any()) {
        $('#notMobile').show();
        $('#controls').show();
        canvasHeight = 394;
        canvasWidth = 361;
        mobile = true;
        canvas.className = "canvas game w3-border w3-border-white";
    } else {
        canvas.className = "canvas game w3-border w3-border-white w3-blue-grey w3-round-large w3-padding";
    }
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    $(canvas).insertAfter('#canvasline');

    /* This function serves as the kickoff point for the game loop itself
     * and handles properly calling the update and render methods.
     */
    function main() {
        /* Get our time delta information which is required if your game
         * requires smooth animation. Because everyone's computer processes
         * instructions at different speeds we need a constant value that
         * would be the same for everyone (regardless of how fast their
         * computer is) - hurray time!
         */
        var now = Date.now(),
            dt = (now - lastTime) / 1000.0;

        /* Call our update/render functions, pass along the time delta to
         * our update function since it may be used for smooth animation.
         */
        update(dt);
        render();

        /* Set our lastTime variable which is used to determine the time delta
         * for the next time this function is called.
         */
        lastTime = now;

        /* Use the browser's requestAnimationFrame function to call this
         * function again as soon as the browser is able to draw another frame.
         */
        win.requestAnimationFrame(main);
    }

    /* This function does some initial setup that should only occur once,
     * particularly setting the lastTime variable that is required for the
     * game loop.
     */
    function init() {
        lastTime = Date.now();
        main();
    }

    /* This function is called by main (our game loop) and itself calls all
     * of the functions which may need to update entity's data. Based on how
     * you implement your collision detection (when two entities occupy the
     * same space, for instance when your character should die), you may find
     * the need to add an additional function call here. For now, we've left
     * it commented out - you may or may not want to implement this
     * functionality this way (you could just implement collision detection
     * on the entities themselves within your app.js file).
     */
    function update(dt) {
        updateEntities(dt);
        // checkCollisions();
    }

    /* This is called by the update function  and loops through all of the
     * objects within your allEnemies array as defined in app.js and calls
     * their update() methods. It will then call the update function for your
     * player object. These update methods should focus purely on updating
     * the data/properties related to  the object. Do your drawing in your
     * render methods.
     */
    function updateEntities(dt) {
        allEnemies.forEach(function(enemy) {
            enemy.update(dt);
        });
        player.update();
    }

    /* This function initially draws the "game level", it will then call
     * the renderEntities function. Remember, this function is called every
     * game tick (or loop of the game engine) because that's how games work -
     * they are flipbooks creating the illusion of animation but in reality
     * they are just drawing the entire screen over and over.
     */
    function render() {
        /* This array holds the relative URL to the image used
         * for that particular row of the game level.
         */
         var rowImages;
            numRows = 6;
            numCols = 5;
        if (mobile) {
            rowImages = [
                    'images/small/grass-block.png', // Top row is water
                    'images/small/grass-block.png', // Row 1 of 3 of stone
                    'images/small/stone-block.png', // Row 2 of 3 of stone
                    'images/small/stone-block.png', // Row 3 of 3 of stone
                    'images/small/stone-block.png', // Row 1 of 2 of grass
                    'images/small/grass-block.png' // Row 2 of 2 of grass
                ];
        } else {
            rowImages = [
                    'images/grass.png', // Top row is water
                    'images/grass.png', // Row 1 of 3 of stone
                    'images/water.png', // Row 2 of 3 of stone
                    'images/water.png', // Row 3 of 3 of stone
                    'images/water.png', // Row 1 of 2 of grass
                    'images/grass.png' // Row 2 of 2 of grass
                ];
        }

        /* Loop through the number of rows and columns we've defined above
         * and, using the rowImages array, draw the correct image for that
         * portion of the "grid"
         */
        for (var row = 0; row < numRows; row++) {
            for (var col = 0; col < numCols; col++) {
                /* The drawImage function of the canvas' context element
                 * requires 3 parameters: the image to draw, the x coordinate
                 * to start drawing and the y coordinate to start drawing.
                 * We're using our Resources helpers to refer to our images
                 * so that we get the benefits of caching these images, since
                 * we're using them over and over.
                 */
                if (mobile) {
                    ctx.drawImage(Resources.get(rowImages[row]), col * 71, row * 61);

                } else {
                    ctx.drawImage(Resources.get(rowImages[row]), col * 101, row * 83);
                }
            }
        }


        renderEntities();
    }

    /* This function is called by the render function and is called on each game
     * tick. It's purpose is to then call the render functions you have defined
     * on your enemy and player entities within app.js
     */
    function renderEntities() {
        /* Loop through all of the objects within the allEnemies array and call
         * the render function you have defined.
         */
        allEnemies.forEach(function(enemy) {
            enemy.render();
        });
        gem.render();
        player.render();
    }

    /* This function does nothing but it could have been a good place to
     * handle game reset states - maybe a new game menu or a game over screen
     * those sorts of things. It's only called once by the init() method.
     */
    global.reset = function() {
        // noop
        allEnemies = [enemy1, enemy2, enemy3];
        player.lives = 5;
        gem = new Gem();
        document.getElementById('lives').innerHTML = player.lives;
        for (var x = 0; x < gems.length; x++) {
            gems[x].style.display = "none";
        }
        i = 0;
        $('#empty').show();
        $('.canvas').show();
        $('.w3-modal').hide();
        init();
        active = true;
    };

    /* Go ahead and load all of the images we know we're going to need to
     * draw our game level. Then set init as the callback method, so that when
     * all of these images are properly loaded our game will start.
     */
    if (mobile) {
        Resources.load([
            'images/bug-pink.png',
            'images/bug-green.png',
            'images/water.png',
            'images/grass.png',
            'images/snowshoes.png',
            'images/shoes/skates.png',
            'images/shoes/rain.png',
            'images/shoes/clown.png',
            'images/shoes/oxfords.png',
            'images/shoes/thighs.png',
            'images/shoes/rubyred.png',
            'images/kenzie.png',
            'images/small/stone-block.png',
            'images/small/gem-blue.png',
            'images/small/gem-orange.png',
            'images/small/gem-green.png',
            'images/small/heart.png',
            'images/small/star.png',
            'images/small/key.png',
            'images/small/water-block.png',
            'images/small/grass-block.png',
            'images/small/enemy-bug.png',
            'images/small/char-boy.png',
            'images/small/heart.png',
            'images/small/char-cat-girl.png',
            'images/small/char-boy-blue.png',
            'images/small/char-boy-sailor.png',
            'images/small/char-boy-ninja.png',
            'images/small/char-horn-girl.png',
            'images/small/char-pink-girl.png',
            'images/small/char-princess-girl.png',
            'images/stone-block.png',
            'images/gem-blue.png',
            'images/gem-orange.png',
            'images/gem-green.png',
            'images/heart.png',
            'images/star.png',
            'images/key.png',
            'images/water-block.png',
            'images/grass-block.png',
            'images/enemy-bug.png',
            'images/char-boy.png',
            'images/heart.png',
            'images/char-cat-girl.png',
            'images/char-boy-blue.png',
            'images/char-boy-sailor.png',
            'images/char-boy-ninja.png',
            'images/char-horn-girl.png',
            'images/char-pink-girl.png',
            'images/char-princess-girl.png'
        ]);
    } else {
        Resources.load([
            'images/bug-pink.png',
            'images/bug-green.png',
            'images/water.png',
            'images/grass.png',
            'images/snowshoes.png',
            'images/shoes/skates.png',
            'images/shoes/rain.png',
            'images/shoes/clown.png',
            'images/shoes/oxfords.png',
            'images/shoes/thighs.png',
            'images/shoes/rubyred.png',
            'images/kenzie.png',
            'images/stone-block.png',
            'images/gem-blue.png',
            'images/gem-orange.png',
            'images/gem-green.png',
            'images/heart.png',
            'images/star.png',
            'images/key.png',
            'images/water-block.png',
            'images/grass-block.png',
            'images/enemy-bug.png',
            'images/char-boy.png',
            'images/heart.png',
            'images/char-cat-girl.png',
            'images/char-boy-blue.png',
            'images/char-boy-sailor.png',
            'images/char-boy-ninja.png',
            'images/char-horn-girl.png',
            'images/char-pink-girl.png',
            'images/char-princess-girl.png',
            'images/small/stone-block.png',
            'images/small/gem-blue.png',
            'images/small/gem-orange.png',
            'images/small/gem-green.png',
            'images/small/heart.png',
            'images/small/star.png',
            'images/small/key.png',
            'images/small/water-block.png',
            'images/small/grass-block.png',
            'images/small/enemy-bug.png',
            'images/small/char-boy.png',
            'images/small/heart.png',
            'images/small/char-cat-girl.png',
            'images/small/char-boy-blue.png',
            'images/small/char-boy-sailor.png',
            'images/small/char-boy-ninja.png',
            'images/small/char-horn-girl.png',
            'images/small/char-pink-girl.png',
            'images/small/char-princess-girl.png',
        ]);
    }
    Resources.onReady(init);

    /* Assign the canvas' context object to the global variable (the window
     * object when run in a browser) so that developer's can use it more easily
     * from within their app.js files.
     */
    global.ctx = ctx;
})(this);
