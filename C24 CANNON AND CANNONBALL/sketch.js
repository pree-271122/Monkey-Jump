const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas;

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  monkeyimage = loadImage("./assets/monkey.gif");
  
}

function setup() {
  canvas = createCanvas(1200,600);

  
  
}

function draw() {
  background(189);
  image (backgroundImg,0,0,width,height);
  image (monkeyimage,50,400,200,200);
 
}







