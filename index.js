let posY = -90;
let img = document.getElementById("image");
let imgHolder = document.querySelector(".image-holder");
let counter = true;


function moveRocket(){
  if(counter){
  requestAnimationFrame(moveRocket);
  if(posY != 280){
    console.log(posY);
  posY++;
  img.style.bottom = posY + "px";
}
else{
  posY = -90
  img.style.bottom = posY + "px";

}
}
}

$(imgHolder).hover(function(){
  counter = true;
  moveRocket();
})

$(imgHolder).mouseleave(function(){
   counter = false;
   posY = 280;
   img.style.bottom = "-90px";
})
