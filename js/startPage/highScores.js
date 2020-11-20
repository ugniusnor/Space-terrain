import {formatTime} from "./formatTime.js"
function highScore () {
const DOM=document.querySelector(".start-game");

DOM.innerHTML+= 
            `<div class="high-scores">
                    <h2> High Scores </h2>
                    <div class="row"> <span> Name: ${localStorage.getItem("name")} 
                    </span> <span> Score: ${localStorage.getItem("score")}
                    </span> <span>Date: ${formatTime(localStorage.getItem("date"))}</span> 
                    </div>

            </div>`
}

export {highScore};