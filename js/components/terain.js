
class Terrain {
    constructor() {
      this.width=Math.floor(Math.random() * (500 - 300 +1) + 300)
      this.height=Math.floor(Math.random() * (100 - 40 +1) + 40);
      this.color="red";
      this.moving=false;
      this.count=0;
    }

create () {
  let windowHeight=document.querySelector(".play-area").clientHeight;
  const score=document.querySelector(".score-table");
    let count=0;
    let terrainLastTop=0;
    let currentTerrains=[];
    let terrainSpeed=0.5;
    setInterval(function(){
        let terrainLast=document.getElementById("terrain"+(count-1));
        let terrainFirst=document.getElementById("terrain"+0)
        
        if ( count > 0)
         {
             terrainLastTop=parseInt(window.getComputedStyle(terrainLast).getPropertyValue("top"));
        }
         if (terrainLastTop > 0 || count===0)
       {
        const terrain = document.createElement("div");
        const gameArea=document.querySelector(".play-area");
        terrain.setAttribute("class","terrain");
        terrain.setAttribute("id" ,"terrain"+ count);
        count==0 ? terrain.style.top=30+"px" : terrain.style.top=terrainLastTop - 290 +"px";
        gameArea.appendChild(terrain)
        let random=Math.floor(Math.random() * (3 - 1) + 1)
        random ==1 ? terrain.style.left=0+"px" : terrain.style.right=0+"px";
      terrain.style.width=Math.floor(Math.random() * (40 - 60 +1) + 60) + "%";
      currentTerrains.push(count);
       count++;
    }      

//Colisions
let ship= document.querySelector(".myObj");
let allBoxes=document.querySelectorAll(".terrain");
let rect1 = ship.getBoundingClientRect();
let rect2;
let oldScore = localStorage.getItem("score")
let oldName=localStorage.getItem("name");
let oldDate=localStorage.getItem("date");
let newScore=count;
let newName = localStorage.getItem("tempName");
let newDate=localStorage.getItem("tempDate")

       for (let i=0;i<currentTerrains.length; i++) {
             let current = currentTerrains[i];
             let iTerrain=document.getElementById("terrain"+current);
             let iTerrainTop = parseFloat(window.getComputedStyle(iTerrain).getPropertyValue("top"));
             iTerrain.style.top=iTerrainTop + terrainSpeed +"px"
            if (iTerrainTop >= windowHeight+50) {
              currentTerrains.shift();
              iTerrain.remove();
            }
            rect2 = allBoxes[i].getBoundingClientRect();
       if (rect1.x < rect2.x + rect2.width &&
          rect1.x + rect1.width > rect2.x &&
          rect1.y < rect2.y + rect2.height &&
          rect1.y + rect1.height > rect2.y) {
           // collision detected!
           reset()
           if (newScore>oldScore) {
            localStorage.setItem("score",newScore)
            localStorage.setItem("name",newName )
            localStorage.setItem("date", newDate)
           }
           else {
             localStorage.setItem("score",oldScore)
             localStorage.setItem("name",oldName)
             localStorage.setItem("date",oldDate)

            }

       } 
        }
       
       score.innerHTML=`${count}`;
        
       terrainSpeed+=0.00010
    },2)
    
    function reset () {
      location.reload();
       alert("You lost")
      
    }
}




}   

export {Terrain}