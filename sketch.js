// déclaration de variable 
let nombrePM; 

let ratio = 4961/3508;
let formatL = 500;
let formatH = formatL*ratio;

let fond;
let titre;
let soleil;
let lune;

let containerGM= [];
let containerPM= [];

function setup() {
 
  createCanvas(formatL+40, formatH*1.3);
  background(255);
  noSmooth();
  
  
  fond = loadImage("asset/fond_turquie.png");
  titre = loadImage("asset/texte_turquie.png");
  lune = loadImage("asset/lune.png");
  soleil = loadImage("asset/soleil.png");
  
  nuage1 = loadImage("asset/nuages/nuages1.png");
  nuage2 = loadImage("asset/nuages/nuages2.png");
  nuage3 = loadImage("asset/nuages/nuages3.png");
  
  
  nombrePM =5;

  
  for(let i=0; i < nombrePM; i+=1){
    let possiles_images; 
    possibles_images = [
      "asset/petiteMongolfiere1.png",
      "asset/petiteMongolfiere2.png",
      "asset/petiteMongolfiere3.png",
      "asset/petiteMongolfiere4.png",
      "asset/petiteMongolfiere5.png",
      
    ];
    containerGM= new GrandeMongolfiere();
    containerPM[i]= new PetitesMongolfieres(loadImage(possibles_images[i]));
      
  }
}


function draw() {
  background(255);
  image(fond, 20,20, formatL, formatH);
  image(titre, 20, 720, formatL,formatH/3.5);

//   gestion du click sur le soleil passage jour nuit 
  if (mouseIsPressed && (formatL-200 < mouseX && mouseX < formatL-20 && 20 < mouseY && mouseY < 150)) {
    filter(INVERT);
    image(lune, formatL-120, 50, 100, 100);
  } else {
    image(soleil, formatL-180, 0, 200, 190); 
  }
  
  image(nuage1, 10, 160, 200,200/2.2);
  image(nuage2, 350, 350, 200,200/3);
  image(nuage3, 350, 150, 100,100/2.2);

  
  for(let i=0; i<nombrePM; i++){
    containerPM[i].deplacer();
    containerPM[i].dessiner();
    
  }
  containerGM.deplacer();
  containerGM.afficherCercle();
  
  containerGM.dessiner();
  
  
}