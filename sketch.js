var canvas, backgroundImage;

var gameState = 0 
var playerCount;

var database;

var form, player, game;


function setup(){
    canvas = createcanvas(400,400);
    database = firebase.database()
    game = new Game();
    game.getState();
    game.start();
}

function draw(){

}