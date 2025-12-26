let container = document.querySelector(".container")
for (let i = 0; i < 256; i++) {
  const square = document.createElement("div");
  square.addEventListener("mouseenter", () =>{
    r=Math.floor(Math.random()*255)
    g=Math.floor(Math.random()*255)
    b=Math.floor(Math.random()*255)
    square.style.backgroundColor="rgb(" + r + "," + g + "," + b + ")"
    
  })
  
  square.classList.add("square")
  container.appendChild(square)
}


let reset = document.querySelector(".reset")
reset.addEventListener("click",()=>{
    let size = prompt("Enter no: ")
    if (size>81){
        alert("Enter Valid no")
        return;
    }
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    for (let i = 0; i < size*size; i++) {
        const square = document.createElement("div");
        square.addEventListener("mouseenter", () =>{
            r=Math.floor(Math.random()*255)
            g=Math.floor(Math.random()*255)
            b=Math.floor(Math.random()*255)
            square.style.backgroundColor="rgb(" + r + "," + g + "," + b + ")"

        })
        square.style.width=(960/size) + "px"
        square.style.height=(960/size) + "px"
        square.classList.add("square")
        container.appendChild(square)
    }
})
