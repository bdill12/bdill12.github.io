

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
        'images/snowman1.PNG',
        'images/snowman2.PNG',
        'images/snowman3.PNG',
        'images/snowman4.PNG',
        'images/snowman5.PNG'
    ]);
    Resources.onReady(init);
    global.ctx = ctx;

    function render() {
        ctx.drawImage(Resources.get('images/snowman1.PNG'), 0, 0);
    }
$(document).ready(function() {
    var theater = new TheaterJS();

    theater.describe("Olaf", .9, "#olaf").describe("Frosty", .9, "#frosty");

    theater
    .write('Frosty: Ummm...', 500)
    .write('Frosty: This might be a trick...', function() {
        ctx.drawImage(Resources.get('images/snowman2.PNG'), 0, 0);})
    .write("Olaf: AAAAAAAAAAAHHHHHHH!", function() {
        ctx.drawImage(Resources.get('images/snowman3.PNG'), 0, 0);})
    .write("Olaf: OHMYOHMY", function() {
        ctx.drawImage(Resources.get('images/snowman4.PNG'), 0, 0);})
    .write("Olaf: GASP!", function() {
        ctx.drawImage(Resources.get('images/snowman5.PNG'), 0, 0);})
    .write("Olaf: IT'S JUST LIKE I DREAMED IT!").write("Frosty: Ok, then.");
});
};


engine(this);
