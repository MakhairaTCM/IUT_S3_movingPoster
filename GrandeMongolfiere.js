let keysPressed = {};
let sonMontgolfiere;


function preload() {
  sonMontgolfiere = loadSound("asset/sonMontgolfiere.mp3");
  sonMontgolfiere.setVolume(0.5);
}

function keyPressed() {
  keysPressed[keyCode] = true;
}

function keyReleased() {
  keysPressed[keyCode] = false;
}


class GrandeMongolfiere extends mongolfiere {
  constructor() {
    super(loadImage("asset/grandeMontgolfiere.png"));
    this.w = 1456 / 7;
    this.h = 1073 / 4;
    this.x = formatL / 3;
    this.y = 150;
    this.brightness = 0; 
    this.increasing = true;
    
  }

  deplacer() {
    let speed = 1.5;
    let sx = 0;
    let sy = 0;

//     gestion des contrôles et de la musique si la montgolfiere bouge
    if(keysPressed[90] || keysPressed[83] || keysPressed[81]  || keysPressed[68] || keysPressed[38] || keysPressed[40] || keysPressed[37]  || keysPressed[39] ){
      if (keysPressed[90]) sy -= speed; // Z
      if (keysPressed[83]) sy += speed; // S 
      if (keysPressed[81]) sx -= speed; // Q 
      if (keysPressed[68]) sx += speed; // D 
      
      if (keysPressed[38]) sy -= speed; // haut
      if (keysPressed[40]) sy += speed; // S 
      if (keysPressed[37]) sx -= speed; // Q 
      if (keysPressed[39]) sx += speed; // D 
      
      if (!sonMontgolfiere.isPlaying()) {
        sonMontgolfiere.loop();
      }
    }else{
      sonMontgolfiere.stop();
    }
    
    //gestion de la sortie de cadre
    if (this.x+this.w-30 > formatL-20) {
      this.x = 20;
    }
    if (this.x < 20) {
      this.x = formatL-this.w+10;
    }
    if (this.y+this.h-10 > formatH) {
      this.y = 20;
    }
    if (this.y < 20) {
      this.y = formatH-this.h;
    }
    


    this.x += sx;
    this.y += sy;
  }
//   cercle qui simule la flamme d'une montgolfiere
  afficherCercle() {
  
    if (this.increasing) {
      this.brightness += 5;
      if (this.brightness > 255) this.increasing = false;
    } else {
      this.brightness -= 5;
      if (this.brightness < 50) this.increasing = true;
    }


    let fireColors = [
      color(255, 69, 0), // Rouge 
      color(255, 140, 0), // Orange
      color(255, 255, 0), // Jaune
    ];
    let selectedColor = fireColors[int(random(fireColors.length))];

    fill(red(selectedColor), green(selectedColor), blue(selectedColor), this.brightness);
    noStroke();
    ellipse(this.x + 103, this.y + this.h - 15 , 8, 8);
  }

  
}

