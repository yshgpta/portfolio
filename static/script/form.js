var load_form = function(){
  var title = document.querySelector(".form-title");
  var body = document.querySelector(".form-body");
  body.classList.add('animated','lightSpeedIn');
  setTimeout(function(){
    title.classList.add('show','animated','flipInX');
    var icon = document.querySelectorAll(".contact-icon");
    var i;
    for(i=0;i<3;i++){
      icon[i].classList.add('show','animated','rotateIn');
    }
  },3000)
  setTimeout(function(){
    var value = document.querySelectorAll(".contact-value");
    var i;
    for(i=0;i<3;i++){
      value[i].classList.add('show','animated','flipInX');
    }
  },5000)
}
