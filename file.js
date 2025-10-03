let increase = document.querySelector("#increase")
let decrease = document.querySelector("#decrease")
let display = document.querySelector("#display")
let reset = document.querySelector("#reset")

let value = 0

increase.addEventListener("click", ()=>{
    value++
    display.innerHTML = value;
})

decrease.addEventListener("click", ()=>{
    value--
    display.innerHTML = value;
})

reset.addEventListener("click", ()=>{
    value = 0
    display.innerHTML = value;
})

