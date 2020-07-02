window.onload = function () {
    const canvas = document.getElementById('mycanvas');
    const app = new PIXI.Application({
        view: canvas,
        width: 1000,
        height: 500,
        backgroundColor: 0xfcba03
    });

    document.body.appendChild(app.view);
    const texsture = PIXI.Texture.from('images/bunny.png');
    const img = new PIXI.Sprite(texsture);

    img.x = app.renderer.width / 2;
    img.y = app.renderer.height / 2;

    app.stage.addChild(img);

    function circle() {
        let circle = new PIXI.Graphics();
        let randomColor = getRandomColor();
        circle.beginFill(randomColor);
        circle.drawCircle(100, 100, 32);
        circle.endFill();
        circle.x = Math.floor(Math.random() * 800) + 50;
        circle.y = Math.floor(Math.random() * 800) + 50;
        app.stage.addChild(circle);
    }

    function triangle() {
        let triangle = new PIXI.Graphics();
        let randomColor = getRandomColor();
        triangle.beginFill(randomColor);
        triangle.drawPolygon([
            -32, 64,
            32, 64,
            0, 0
        ]);

        triangle.endFill();
        triangle.x = Math.floor(Math.random() * 800) + 50;  
        triangle.y = Math.floor(Math.random() * 800) + 50;

        app.stage.addChild(triangle);
    }


    function rectangle() {
        let rectangle = new PIXI.Graphics();
        let randomColor = getRandomColor();
        rectangle.beginFill(randomColor);
        rectangle.drawRect(300, 100, 64, 64);
        rectangle.endFill();
        rectangle.x = Math.floor(Math.random() * 800) + 50;    
        rectangle.y = Math.floor(Math.random() * 800) + 50;
        app.stage.addChild(rectangle);
    }


    function hexagon() {
        let hexagon = new PIXI.Graphics();
        let randomColor = getRandomColor();
        hexagon.beginFill(randomColor);
        hexagon.drawPolygon([
            10, 40,
            20, 60,
            50, 60,
            60, 40,
            50, 20,
            20, 20
        ]);
        hexagon.endFill();
        hexagon.x = Math.floor(Math.random() * 800) + 50;
        hexagon.y = Math.floor(Math.random() * 800) + 50;
        app.stage.addChild(hexagon);
    }


    function pentagon() {
        let pentagon = new PIXI.Graphics();
        let randomColor = getRandomColor();
        pentagon.beginFill(randomColor);
        pentagon.drawPolygon([
            30, 60,
            50, 30,
            40, 10,
            20, 10,
            10, 30
        ]);
        pentagon.endFill();
        pentagon.x = Math.floor(Math.random() * 800) + 50;
        pentagon.y = Math.floor(Math.random() * 800) + 50;
        app.stage.addChild(pentagon);
    }


    function ellipse() {
        let ellipse = new PIXI.Graphics();
        let randomColor = getRandomColor();
        ellipse.beginFill(randomColor);
        ellipse.drawEllipse(600, 100, 45, 25);
        ellipse.endFill();
        ellipse.x = Math.floor(Math.random() * 800) + 50;
        ellipse.y = Math.floor(Math.random() * 800) + 50;
        app.stage.addChild(ellipse);
    }

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '0x';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    } 

    function randomShape() {
        let shapes = [ellipse, pentagon, hexagon, rectangle, triangle, circle]
        shapes[Math.floor(Math.random()*shapes.length)]();
    }

    //Function createShape for generating shapes by mouse coordinates
    /*function createShape() {
        let pos = app.renderer.plugins.interaction.mouse.getLocalPosition(app.stage);
        let shape = randomShape();
        shape.x = pos.x;
        shape.y = pos.y;
    }*/


    //Creating random shape every 2 sec
    setInterval(function () {
        let shapes = [ellipse, pentagon, hexagon, rectangle, triangle, circle]
        shapes[Math.floor(Math.random()*shapes.length)]();
    }, 2000);
}