let container = document.querySelector(".container")
for (let i = 0; i < 256; i++) {
  const square = document.createElement("div");
  square.addEventListener("mouseenter", () =>{
    square.style.backgroundColor="Blue"
  })
  
  square.classList.add("square")
  container.appendChild(square)
}


let reset = document.querySelector(".reset")
reset.addEventListener("click",()=>{
    let size = prompt("Enter no: ")
    
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    for (let i = 0; i < size*size; i++) {
        const square = document.createElement("div");
        square.addEventListener("mouseenter", () =>{
            square.style.backgroundColor="Blue"
        })
        square.style.width=(960/size) + "px"
        square.style.height=(960/size) + "px"
        square.classList.add("square")
        container.appendChild(square)
    }
})
