const PIXI2 = /** @type {typeof import("pixi.js")} */ (window.PIXI);

//Create a Pixi Application
let app = new PIXI2.Application({ width: 256, height: 256 });

//Add the canvas that Pixi2 automatically created for you to the HTML document
app.renderer.view.style.position = "absolute";
app.renderer.view.style.display = "block";
app.renderer.autoResize = true;
app.renderer.resize(window.innerWidth, window.innerHeight);
document.body.appendChild(app.view);

//load an image and run the `setup` function when it's done
const loader = new PIXI2.Loader();
loader.add("images/cat.png").load(setup);

let cat1;
let cat2;

//This `setup` function will run when the image has loaded
function setup() {
  //Create the cat sprite
  cat1 = new PIXI2.Sprite(loader.resources["images/cat.png"].texture);
  cat2 = new PIXI2.Sprite(loader.resources["images/cat.png"].texture);

  //Add the cat to the stage
  app.stage.addChild(cat1);
  app.stage.addChild(cat2);

  cat2.y = 100;

  app.ticker.add((delta) => gameLoop(delta));
}

let direction = 1;
function gameLoop() {
  cat1.x = cat1.x + direction;
  if (cat1.x + cat1.width >= app.view.width) {
    direction = -1;
  }
  if (cat1.x <= 0) {
    direction = 1;
  }
}
