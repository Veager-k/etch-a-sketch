/*
    To add:
    input via hover or click
    clear button
    color > rainbow mode
    shading
    scaling pixel count
    appealing visual design
    grid toggle
*/

const grid = document.querySelector(".grid");


let rainbowMode = false;
const rainbowButton = document.querySelector("#rainbowButton");
rainbowButton.addEventListener("click", () => toggleRainbow())
function toggleRainbow(){
    if(rainbowMode) rainbowMode = false;
    else rainbowMode = true;
}

for(let i=0;i<16*16;i++){
    const div = document.createElement("div");
    div.style.border = "0.05em solid black";
    div.addEventListener("mouseover", (e) => color_cell(e));
    div.id = i;
    grid.appendChild(div);
}

function color_cell(e){
    if(rainbowMode){
        let colorR = (Math.floor(Math.random()*16)).toString(16);
        let colorG = (Math.floor(Math.random()*16)).toString(16);
        let colorB = (Math.floor(Math.random()*16)).toString(16);
        e.target.style.backgroundColor = "#"+colorR+colorG+colorB;
    }
    else e.target.style.backgroundColor = "black";
}
