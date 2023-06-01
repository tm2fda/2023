let trazos = [];
let cantidad = 13;
let paleta;

function preload(){
  for( let i=0 ; i<cantidad ; i++ ){
    let nombre = "data/trazo"+nf(i,2)+".png"; 
    //console.log( nombre );
    trazos[i] = loadImage( nombre );
  }
  paleta = new Paleta( "data/noche.png" );
}


function setup() {
  createCanvas(displayWidth, displayHeight);
  background(255);
  imageMode( CENTER );
  
}

function draw() {
  let cual = int(random( cantidad ));
  let x = random( width );
  let y = random( height );
  let unColor = paleta.darColor();
  tint( unColor );

  image( trazos[cual] , x , y );
}
