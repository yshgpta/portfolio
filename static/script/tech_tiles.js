var load_tech_tiles = function(){
  var i;
  for(i=0;i<10;i++){
    var element = document.getElementsByClassName("tech-tool-item")[i];
    element.classList.add('animated','fadeInLeft');
  }
  for(i=5;i<10;i++){
    var element = document.getElementsByClassName("tech-tool-item")[i];
    element.classList.add('animated','fadeInRight');
  }
}
