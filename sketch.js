

//bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametroBolinha = 20;
let raioBolinha = diametroBolinha/2;

//velocidade bolinha
let velocidadeXBolinha = 5;
let velocidadeYBolinha = 5;

//raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//raquete oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

//colisão
let colidiu = false;

//placar
let meusPontos = 0;
let pontosOponente = 0;





function setup() {
  createCanvas(600, 400);
}


function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaquete();
  movimentaRaqueteOponente();
  colisaoRaquete(xRaquete,yRaquete);
  colisaoRaquete(xRaqueteOponente,yRaqueteOponente);
  incluiPlacar();
  marcaPonto();
}


function mostraBolinha(){
  circle(xBolinha,yBolinha,diametroBolinha);
}


function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}


function verificaColisaoBorda(){
  if (xBolinha + raioBolinha > width || xBolinha - raioBolinha < 0){
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raioBolinha > height || yBolinha - raioBolinha < 0){
    velocidadeYBolinha *= -1;
  } 
}


function mostraRaquete(x,y){
  rect(x,y,raqueteComprimento,raqueteAltura);
}

function movimentaRaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}

function movimentaRaqueteOponente(){
  velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento /2 - 30;
  yRaqueteOponente += velocidadeYOponente
  
}


function colisaoRaquete(x,y){
  colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raioBolinha);
  
  if (colidiu){
    velocidadeXBolinha *= -1;
  }
}

function incluiPlacar(){
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255,140,0));
  rect(150,10,40,20);
  rect(450,10,40,20);
  fill(255);
  text(meusPontos,170,26)
  text(pontosOponente,470,26)
}

function marcaPonto(){
  if (xBolinha > 590){
    meusPontos += 1;
  }
  if (xBolinha < 10){
    pontosOponente += 1;
  }
  
}
