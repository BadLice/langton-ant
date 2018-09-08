var moves = 0;
var txt;

var black;
var white;

var n = 5;
var ants = [];

//size of every pixel
var w = 4;
var h = 4;

var prob = 1;

function setup()
{
  txt = createP();

  black = color(0, 0, 0);
  white = color(255, 255, 255);

  createCanvas(400, 400);
  initPixels();

  for (var i = 0; i < n; i++)
    ants.push(new Ant(width / 2 + i, height / 2 + i));
}

function draw()
{
  loadPixels();

  for (var i = 0; i < ants.length; i++)
    ants[i].update();

  txt.html(++moves);
}

function initPixels()
{
  loadPixels();
  for (var i = 0; i < width; i += w)
  {
    for (var j = 0; j < height; j += h)
    {
      if (random(1) < prob)
        setCell(i, j, black);
      else
        setCell(i, j, white);
    }
  }
  updatePixels();
}

function setCell(x, y, c)
{
  for (var k = 0; k < w; k++)
    for (var z = 0; z < h; z++)
      set(x + k, y + z, c);

}