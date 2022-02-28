let mainPage = document.createElement("a")
let left = document.querySelector("#left")
let right = document.getElementById("right")
let rotate = document.getElementById("rotate")
let house = document.getElementById("house")
let div = document.querySelectorAll("div")
let input = document.querySelector('[type="url"]')
let Container= []
let ConUrl= 1

let submit = function () {
iframe.style.background = "white"
window.open(link.value ,"boxbrowser")
if(link.value !== ""){
    Container.push(link.value)
}
}
// Previous Funcation
function previous(){
    if(ConUrl == Container.length ){
        ConUrl--
    }
    ConUrl++;
    window.open(Container[Container.length-ConUrl],"boxbrowser")
    input.value = Container[Container.length-ConUrl]
}
// Next Funcation
function next(){
    if(ConUrl <= 1 ){
        ConUrl++
    }
    ConUrl--;
    window.open(Container[Container.length-ConUrl],"boxbrowser")
    input.value = Container[Container.length-ConUrl]
}
// Refresh Funcation
function refresh(){
    window.open(Container[Container.length-ConUrl],"boxbrowser")
}
// home Funcation
function home(){
    window.open('Browser-Project.html',"_self")
}