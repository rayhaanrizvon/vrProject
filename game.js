var scene;

function start(){
    scene = $("a-scene")[0];
    console.log("Game Loaded");

}

AFRAME.registerComponent("start-game",{
    init: start


})