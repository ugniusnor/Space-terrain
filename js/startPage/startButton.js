function startGame(isPlaying) {
   const DOM=document.querySelector(".startPage");
   DOM.innerHTML+= 
                    `<div class="start-game">
                        <h2> Insert your name and start adventure now!</h2>  
                        <form action="#"> 
                        <input type="text" placeholder="Your space name" >
                        <button>START </button>
                        </form>          
                    </div>`;
}

export {startGame}