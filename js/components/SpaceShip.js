class Spaceship {
    
    constructor () {
        this.width=80,
        this.height=70,
        this.obj="myObj",
        this.selector='document.querySelector(".myObj")',
       this.plane="/pnae.png"
    }

    init() {
this.create();
this.move();
    }

    create () {
        const DOM=document.querySelector("body")
        const HTML=
        `
        <div class="play-area">
        <div class="score-table"> </div>;
         <div class="${this.obj}"> </div>
         </div>
        `;
        DOM.innerHTML=HTML;
        const myObj = document.querySelector(".myObj");
        myObj.style.width=this.width+"px"
        myObj.style.height=this.height+"px"
        myObj.style.backgroundImage='url(./images/plane.png)'
    }


    move() {
        let playArea= document.querySelector(".play-area");
        const myObj = document.querySelector(".myObj");
        let interval;
        let isTwoClicked=0;
        function moveUp () {
            let top=parseInt(window.getComputedStyle(myObj).getPropertyValue("top"));
            if ( top > 10) {
                myObj.style.top=top-2+"px"
            }
        }
        function moveDown () {
            let top=parseInt(window.getComputedStyle(myObj).getPropertyValue("top"));
            if ( top < playArea.clientHeight - 90) {
                myObj.style.top=top+2+"px"
            }
        }
        function moveRight () {
            let left=parseInt(window.getComputedStyle(myObj).getPropertyValue("left"));
            if ( left < playArea.clientWidth - 90 ) {
                myObj.style.left=left+2+"px"
            }
        }
        function moveLeft () {
            let left=parseInt(window.getComputedStyle(myObj).getPropertyValue("left"));
            if ( left > playArea.clientWidth-playArea.clientWidth ) {
                myObj.style.left=left-2+"px";
            }
           
        }
        window.addEventListener('keydown',(e)=> {
         
            if ( isTwoClicked===0) {
                isTwoClicked++;
            interval=setInterval(()=> {},1)
            if(e.key==="ArrowLeft") {
            interval=setInterval(moveLeft,1)
            }  
            if(e.key==="ArrowRight") {
                interval=setInterval(moveRight,1)
                }  
            if (e.key==="ArrowUp") {
                interval=setInterval(moveUp,1)
            }
            if ( e.key==="ArrowDown") {
                interval=setInterval(moveDown,1)
            }
        }
    })
        window.addEventListener("keyup",function() {
            window.clearInterval(interval)
            isTwoClicked=0;
        })
//mobile controls

window.addEventListener("touchmove",(e)=> {
   e.preventDefault();
   e.stopPropagation();
    let moveShipX = e.targetTouches[0].screenX;
    let moveShipY = e.targetTouches[0].clientY;
    myObj.style.left=moveShipX +"px";
    myObj.style.top=moveShipY- myObj.clientHeight + "px";
    
})

        
    }
}
          
     export {Spaceship}

