class mongolfiere {
  
   constructor(image) {
    this.w = random(20, 40);
    this.h = this.w*1.5;
    this.x = random(20+this.w, formatL-20-this.w);
    this.y = random(20, formatH-100-this.h);
    this.i = image;
    this.vX = random(-0.1, 0.1);
    this.vY = random(0.1, 0.1);
    this.o = 255; 
     
  }
  
//   gestion du déplacement des petites montgolfieres
  deplacer() {
    this.x += this.vX;
    this.y += this.vY;

    if (this.x > formatL-20-this.w || this.x < 20) {
      this.vX *= -1;
    }
    if (this.y > formatH-100-this.h || this.y < 20) {
      this.vY *= -1;
    }
  }

  dessiner() { 
    image(this.i, this.x, this.y, this.w, this.h);
  }
}