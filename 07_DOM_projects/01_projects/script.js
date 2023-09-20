const body = document.querySelector("body")
const buttons=document.querySelectorAll(".button")
buttons.forEach(function(button){
    button.addEventListener("mouseenter",function(dets){
        if(dets.target.id==="grey"){
            body.style.backgroundColor=dets.target.id
        }
        if(dets.target.id==="green"){
            body.style.backgroundColor=dets.target.id
        }
        if(dets.target.id==="blue"){
            body.style.backgroundColor=dets.target.id
        }
        if(dets.target.id==="yellow"){
            body.style.backgroundColor=dets.target.id
        }
    })
    button.addEventListener("mouseleave",function(){
        body.style.backgroundColor="#212121"
    })
})