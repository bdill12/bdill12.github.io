$(document).ready(function() {
    $(".imgLiquidFill").imgLiquid();
});

var engine = function(global) {
    var doc = global.document,
        win = global.window,
        canvas = doc.createElement('canvas'),
        ctx = canvas.getContext('2d');
    canvas.width = 1024;
    canvas.height = 768;
    canvas.className = "canvas";
    doc.body.appendChild(canvas);



    function main() {
        render();
    }

    function update(dt) {}

    function updateEntities(dt) {}

    function init() {
        main();
    }

    Resources.load([
        'images/snowman1.png',
        'images/snowman2.png',
        'images/snowman3.png',
        'images/snowman4.png',
        'images/snowman5.png'
    ]);
    Resources.onReady(init);
    global.ctx = ctx;

    function render() {
        ctx.drawImage(Resources.get('images/snowman1.png'), 0, 0);
    }

    var theater = new TheaterJS();

    theater.describe("Olaf", .9, "#olaf").describe("Frosty", .9, "#frosty");

    theater.write('Frosty: Ummm...', 500).write('Frosty: This might be a trick...', function() {
        ctx.drawImage(Resources.get('images/snowman2.png'), 0, 0);
    }).write("Olaf: AAAAAAAAAAAHHHHHHH!", function() {
        ctx.drawImage(Resources.get('images/snowman3.png'), 0, 0);
    }).write("Olaf: OHMYOHMY", function() {
        ctx.drawImage(Resources.get('images/snowman4.png'), 0, 0);
    }).write("Olaf: GASP!", function() {
        ctx.drawImage(Resources.get('images/snowman5.png'), 0, 0);
    }).write("Olaf: IT'S JUST LIKE I DREAMED IT!").write("Frosty: Ok, then.");
};

engine(this);
