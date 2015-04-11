var canvas = document.getElementById('c');
var context = canvas.getContext('2d');
function  drawScreen () {
      context.fillStyle = 'rgb(155,0,0)';
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.fillStyle = 'rgb(200,0,0)';
      context.fillRect(20, 20, canvas.width-40, canvas.height-40);
      context.beginPath();
         context.arc(canvas.width - 30,50,20,0,Math.PI*2,true);
         context.strokeStyle = "rgba(250,250,250,1)";
         context.lineWidth = 2;
         context.stroke();
         context.closePath();
         context.fillStyle = '#000000';
         context.fill();
         context.fillRect(canvas.width - 35, 50, 10, canvas.height);
      context.beginPath();
         context.arc(canvas.width - 30,50,10,0,Math.PI*2,true);
         context.strokeStyle = "rgba(250,250,250,0.4)";
         context.lineWidth = 4;
         context.stroke();
         context.closePath();
      update();
      testWalls();
      collide();
      render();

   }


   function update() {
      for (var i = 0; i < balls.length; i++) {
         var ball = balls[i];
         ball.nextx = (ball.x += ball.velocityx);
         ball.nexty = (ball.y += ball.velocityy);
      }

   }

   function testWalls() {
      var ball;
      var testBall;

      for (var i = 0; i <balls.length; i++) {
         ball = balls[i];

         if (ball.nextx+ball.radius > canvas.width) {
            ball.velocityx = ball.velocityx*-1;
            ball.nextx = canvas.width - ball.radius;

         } else if (ball.nextx-ball.radius < 0) {
            ball.velocityx = ball.velocityx*-1;
            ball.nextx =ball.radius;

         } else if (ball.nexty+ball.radius > canvas.height) {
            ball.velocityy = ball.velocityy*-1;
            ball.nexty = canvas.height - ball.radius;

         } else if(ball.nexty-ball.radius < 0) {
            ball.velocityy = ball.velocityy*-1;
            ball.nexty = ball.radius;
         }


      }

   }

   function render() {
      var ball;
      var small;
      var medium;
      var xspace;
      var yspace;
      for (var i = 0; i <balls.length; i++) {
      
         ball = balls[i];
         ball.x = ball.nextx;
         ball.y = ball.nexty;
         if (ball.radius - 10 <= 0) {
          small = ball.radius - 2;
          xspace = ball.x+3;
          yspace = ball.y-3;
         } else {
          small = ball.radius - 10;
          xspace = ball.x-5;
          yspace = ball.y+5;
         }

         context.beginPath();
         context.arc(ball.x,ball.y,ball.radius,0,Math.PI*2,true);
         context.strokeStyle = 'rgba(176,196,222,0.8)';
         context.lineWidth = 3;
         context.stroke();
         context.closePath();
         context.fillStyle = 'rgba(176,196,222,0.8)';
         context.fill();
         context.beginPath();
         context.arc(xspace,yspace,small,0,Math.PI*2,true);
         context.strokeStyle = 'rgb(169,169,169,0.3)';
         context.lineWidth = 1;
         context.stroke();
         context.closePath();
         context.fillStyle = 'rgba(211,211,211,0.5)';
         context.fill();
      }

   }

   function collide() {
       var ball;
       var testBall;
       for (var i = 0; i <balls.length; i++) {
           ball = balls[i];
           for (var j = i+1; j < balls.length; j++) {
                 testBall = balls[j];
                if (hitTestCircle(ball,testBall)) {
                    collideBalls(ball,testBall);
                 }
              }
        }
     }

   function hitTestCircle(ball1,ball2) {
       var retval = false;
       var dx = ball1.nextx - ball2.nextx;
       var dy = ball1.nexty - ball2.nexty;
       var distance = (dx * dx + dy * dy);
       if (distance <= (ball1.radius + ball2.radius) *
                       (ball1.radius + ball2.radius) )
       {
              retval = true;
       }
       return retval;
     }

   function collideBalls(ball1,ball2) {

      var dx = ball1.nextx - ball2.nextx;
      var dy = ball1.nexty - ball2.nexty;

      var collisionAngle = Math.atan2(dy, dx);

      var speed1 = Math.sqrt(ball1.velocityx * ball1.velocityx +
          ball1.velocityy * ball1.velocityy);
      var speed2 = Math.sqrt(ball2.velocityx * ball2.velocityx +
          ball2.velocityy * ball2.velocityy);

      var direction1 = Math.atan2(ball1.velocityy, ball1.velocityx);
      var direction2 = Math.atan2(ball2.velocityy, ball2.velocityx);

      var velocityx_1 = speed1 * Math.cos(direction1 - collisionAngle);
      var velocityy_1 = speed1 * Math.sin(direction1 - collisionAngle);
      var velocityx_2 = speed2 * Math.cos(direction2 - collisionAngle);
      var velocityy_2 = speed2 * Math.sin(direction2 - collisionAngle);

      var final_velocityx_1 = ((ball1.mass - ball2.mass) * velocityx_1 +
         (ball2.mass + ball2.mass) * velocityx_2)/(ball1.mass + ball2.mass);
      var final_velocityx_2 = ((ball1.mass + ball1.mass) * velocityx_1 +
         (ball2.mass - ball1.mass) * velocityx_2)/(ball1.mass + ball2.mass);

      var final_velocityy_1 = velocityy_1;
      var final_velocityy_2 = velocityy_2;

      ball1.velocityx = Math.cos(collisionAngle) * final_velocityx_1 +
          Math.cos(collisionAngle + Math.PI/2) * final_velocityy_1;
      ball1.velocityy = Math.sin(collisionAngle) * final_velocityx_1 +
          Math.sin(collisionAngle + Math.PI/2) * final_velocityy_1;
      ball2.velocityx = Math.cos(collisionAngle) * final_velocityx_2 +
          Math.cos(collisionAngle + Math.PI/2) * final_velocityy_2;
      ball2.velocityy = Math.sin(collisionAngle) * final_velocityx_2 +
          Math.sin(collisionAngle + Math.PI/2) * final_velocityy_2;

      ball1.nextx = (ball1.nextx += ball1.velocityx);
      ball1.nexty = (ball1.nexty += ball1.velocityy);
      ball2.nextx = (ball2.nextx += ball2.velocityx);
      ball2.nexty = (ball2.nexty += ball2.velocityy);
   }

   var numBalls = 10;
   var maxSize = 25;
   var minSize = 25;
   var maxSpeed = maxSize+5;
   var balls = [];
   var tempBall;
   var tempX;
   var tempY;
   var tempSpeed;
   var tempAngle;
   var tempRadius;
   var tempRadians;
   var tempvelocityx;
   var tempvelocityy;
   var tempColor;
   var color = '#F0FFFF';

   canvas = document.getElementById("c");
   context = canvas.getContext("2d");
  var addBalls = function() {
    var d = Math.random();
    if (d < 0.7) {
    tempRadius = (Math.floor(Math.random()*15)+5);
      var placeOK = false;
      while (!placeOK) {
         tempX = Math.floor(Math.random()*canvas.width);
         tempY = Math.floor(Math.random()*canvas.height);
         tempSpeed = Math.floor(Math.random() * 3);
         tempAngle = Math.floor(Math.random()*360);
         tempRadians = tempAngle * Math.PI/ 180;
         tempvelocityx = Math.cos(tempRadians) * tempSpeed;
         tempvelocityy = Math.sin(tempRadians) * tempSpeed;
         tempColor = '#F0FFFF';

         tempBall = {x:tempX,y:tempY, nextX: tempX, nextY: tempY, color: tempColor, radius:tempRadius,
             speed:tempSpeed, angle:tempAngle, velocityx:tempvelocityx,
             velocityy:tempvelocityy, mass:tempRadius};
         placeOK = canStartHere(tempBall);
      }
      balls.push(tempBall);
    }
    else if (d < 0.99) {
      balls.pop();
    }
    else {
      balls = [];
    }
    if (balls.length > 30) {
      document.getElementById("instructions").innerHTML = "You have too many bubbles. This isn't a bath. Keep clicking until they all disappear. Then press any key.";
    }
   };

canvas.addEventListener("mouseup", addBalls);
var adj = ["A wonderful", "An enjoyable", "A remarkable", "An incredible",
      "A special", "A surprising", "A reasonable", "A horrible", "A terrific", 
      "A so fetch", "A heinous", "A clean", "A juicy", "A well-researched", "A relaxing", 
      "A delicious", "A dazzling", "A dapper", "An elegant", "An expensive", "A drab", 
      "An aromatic", "An auspicious", "An awesome", "An awful", "A glamorous", 
      "A handsome", "An illegal", "A heavy", "A faulty", "A graceful", "A fresh", 
      "A free", "A meaty", "A needy", "A neat", "An odd", "An open", "An offbeat", 
      "A nimble", "A marked", "A mellow", "A likeable", "A loose", "A mighty", "A lush", 
      "A lyrical", "A moaning", "A rude", "A thirsty", "A tiny", "A tiresome"];
var nouns = ["visitor", "book", "friend", "juicebox", "event", "surprise", "phone call",
      "knock at the door", "letter", "party", "self-assessment", "goal", "little something", "tidbit",
      "announcement", "idea", "protector", "suitor", "mate", "monarch", "day", "solution",
      "attempt", "button", "temper", "cloud", "nest", "fear", "triumph", "victory", "defeat", "jacket",
      "robot", "documentary", "lounge", "student", "mentor", "raisen", "cleaning product", "error",
      "belief", "standard", "carpool"];
var verbs = ["surprise you", "hit you on the head", "bewilder you", "annoy you", "enable you", "test you", "skate by",
      "present itself to you", "fool you ", "cross over to the dark side", "transform you", "treat you like a child",
      "elevate your self-esteem", "help", "simply exist", "rock your world", "reinvent itself like Madonna",
      "stop trying to make 'fetch' happen", "do something fun", "make you think", "get your goose",
      "sing a new song", "move your cheese", "cover you with a blanket", "make you think of your father",
      "remind you to bathe", "stand out", "keep you energized", "Febreeze you", "renew you", "shampoo you",
      "put you first"];
var dayOfTheMonth = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th", "11th",
      "12th", "13th", "14th", "15th", "16th", "17th", "18th", "19th", "20th", "21st", "22nd", "23rd",
      "24th", "25th", "26th", "27th", "28th", "29th", "30th"];
var month = ["this month", "next month", "the month after next", "the month of your birth", "the next month with five Fridays"];

   var startGame = function() {
    if (event.shiftKey) {
      var k = Math.random();
      if (k < 0.3) {
      document.getElementById("instructions").innerHTML = "Step 2: Click once for each letter in the name of your favorite color. Press Alt + Any Key to Continue.";
    }
    else if (k < 0.6) {
      document.getElementById("instructions").innerHTML = "Step 2: Click once for each letter in the name of your favorite food. Press Alt + Any Key to Continue.";
    }
    else {
      document.getElementById("instructions").innerHTML = "Step 2: Click once for each letter in the name of your favorite animal. Press Alt + Any Key to Continue.";
    }
    }
    else if (event.altKey) {
      var m = Math.random();
      if (m < 0.1) {
      document.getElementById("instructions").innerHTML = "Try Again Later. Press Any Key to go back to Step 1.";
    }
    else if (m < 0.6) {
      document.getElementById("instructions").innerHTML = "Final Step: Click 7 times, then press Control + Any Key to get your Fortune<br>Press any key to start over.";
    }
    else {
      document.getElementById("instructions").innerHTML = "Final Step: Click 12 more times, then press Control + Any Key to get your Fortune<br>Press any key to start over.";
    }
    }
    else if (event.ctrlKey) {
      var fortune1 = Math.floor(Math.random() * balls.length);
      var fortune2 = Math.floor(Math.random() * balls.length);
      var fortune3 = Math.floor(Math.random() * balls.length);
      var fortune4 = Math.floor(Math.random() * 30);
      var fortune5 = Math.floor(Math.random() * 5);
      var content = "Your Lucky Fortune: " + adj[fortune1] + " " + nouns[fortune2] + " will " + verbs[fortune3] + " on the " + dayOfTheMonth[fortune4] + " of " + month[fortune5] + ".";
      alert(content);
    }
    else {
    var j = Math.random();
    if (j < 0.3) {
      document.getElementById("instructions").innerHTML = "Step 1: Click Once for Each Letter in your First Name. Press Shift + Any Key to Continue.";
    }
    else if (j < 0.6) {
      document.getElementById("instructions").innerHTML = "Step 1: Click Once for Each Letter in your Last Name. Press Shift + Any Key to Continue.";
    }
    else {
      document.getElementById("instructions").innerHTML = "Step 1: Click Once for Each Letter in your Middle Name. Press Shift + Any Key to Continue.";
    }
  }
  };
window.addEventListener("keypress", startGame);

   for (var i = 0; i < numBalls; i++) {
      tempRadius = (Math.floor(Math.random()*15)+5);
        var placeOK = false;
      while (!placeOK) {
         tempX = Math.floor(Math.random()*canvas.width);
         tempY = Math.floor(Math.random()*canvas.height);
         tempSpeed = Math.floor(Math.random() * 3);
         tempAngle = Math.floor(Math.random()*360);
         tempRadians = tempAngle * Math.PI/ 180;
         tempvelocityx = Math.cos(tempRadians) * tempSpeed;
         tempvelocityy = Math.sin(tempRadians) * tempSpeed;
         tempColor = '#F0FFFF';

         tempBall = {x:tempX,y:tempY, nextX: tempX, nextY: tempY, color: tempColor, radius:tempRadius,
             speed:tempSpeed, angle:tempAngle, velocityx:tempvelocityx,
             velocityy:tempvelocityy, mass:tempRadius};
         placeOK = canStartHere(tempBall);
      }
      balls.push(tempBall);
   }

   function canStartHere(ball) {
      var retval = true;
      for (var i = 0; i <balls.length; i++) {
         if (hitTestCircle(ball, balls[i])) {
            retval = false;
         }
      }
      return retval;
   }
   function gameLoop() {
     window.setTimeout(gameLoop, 20);
     drawScreen();
   }
   gameLoop();