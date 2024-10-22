function image(){
  let image=document.getElementById('beer-image');
  if(image.src.match("beer-empty-glass.jpg")){
    image.src="beer-glass-img.png";
  }
  else{
    image.src="beer-empty-glass.jpg";
  }
}
