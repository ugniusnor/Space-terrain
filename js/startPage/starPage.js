import {startGame} from "./startButton.js"
import {gameEngine} from "../gameEngine/gameEngine.js"
import { highScore } from "./highScores.js";


function startPage () {
    const DOM=document.querySelector("body");
    let HTML = `<div class="startPage">
                    <div class="start-header">
                    <h1> Space Game </h1>
                    </div>
                        <div>`
    DOM.innerHTML=HTML;
  startGame();
  highScore();
  const input=document.querySelector("input")

  const startButton=document.querySelector("form button")
  startButton.addEventListener("click",(e)=> {
    const nameInput=input.value;


    const re=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/
    if (re.test(nameInput) || nameInput.length <2) {
      e.preventDefault();
      return;
    
    }
 
     gameEngine();
    localStorage.setItem("tempName",nameInput)
    
    let d=Date.now();
    localStorage.setItem("tempDate",d)
    localStorage.setItem("date")

  })
  
  
}

export {startPage};