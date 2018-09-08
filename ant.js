/*La formica può spostarsi in ognuna delle 4 direzioni cardinali, seguendo le seguenti regole:

su una cella nera, gira a destra di 90°, scambia il colore della cella, si sposta avanti di una cella
su una cella bianca, gira a sinistra di 90°, scambia il colore della cella, si sposta avanti di una cella
*/
class Ant
{
  constructor(x, y)
  {
    this.x = (floor(random(width / w))) * w;
    this.y = (floor(random(height / h))) * h;
    this.dir = floor(random(4));
  }

  update()
  {
    var c = get(this.x, this.y);
    //on white
    if (color(c).levels.toString() === white.levels.toString())
    {
      setCell(this.x, this.y, black);
      this.rotateLeft();
      this.move();
    }
    else
    {
      //on black
      if (color(c).levels.toString() === black.levels.toString())
      {
        setCell(this.x, this.y, white);
        this.rotateRight();
        this.move();
      }
    }
    updatePixels();
  }

  move()
  {
    //0=right,1=up,2=left,3=down
    if (this.dir == 0)
      if (this.x + w >= width)
        this.x = 0;
      else
        this.x += w;
    else
    if (this.dir == 1)
      if (this.y - h < 0)
        this.y = height - h;
      else
        this.y -= h;
    else
    if (this.dir == 2)
      if (this.x - w < 0)
        this.x = width - w;
      else
        this.x -= w;
    else
    if (this.dir == 3)
      if (this.y + h >= height)
        this.y = 0;
      else
        this.y += h;
  }

  rotateLeft()
  {
    if (this.dir < 3)
      this.dir++;
    else
      this.dir = 0;
  }

  rotateRight()
  {
    if (this.dir > 0)
      this.dir--;
    else
      this.dir = 3;
  }
}