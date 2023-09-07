//4 pillars of DOM
/**
 * selection of an element
 * changing HTML
 * changing CSS
 * event listener
 */
//1*selection of an element
var a = document.querySelector("h1")
//2*changing html
a.innerHTML="inner element"
//3* changing css
a.style.color="red"
a.style.backgroundColor="black"
//4*event listner
a.addEventListener("click" , function(){
a.innerHTML="badal gaya"
a.style.color="black"
a.style.backgroundColor="green"
})