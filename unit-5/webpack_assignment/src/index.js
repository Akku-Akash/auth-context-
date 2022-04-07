
import "./index.css"
import logo from "./img.png"

const img = document.createElement("img")
img.src = logo;
img.style.width = "200px"
const h1 = document.createElement("h1")
h1.innerText = "TODO List"
//h1.classList.add("todo")

const input = document.createElement("input")
// input.classList.add("inp")


const button = document.createElement("button")
button.classList.add("btn")
button.innerText = "Button"
button.onclick = ()=>{
    let el = input.value
    let h4 = document.createElement("ul")
    h4.innerText = el;
    document.getElementById("list").appendChild(h4)
}
document.getElementById("img").appendChild(img)
document.getElementById("cont").append(input,button)
document.getElementById("root").appendChild(h1)
