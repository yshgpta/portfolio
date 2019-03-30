var load_initial = function(){
  var element1 = document.querySelector('.home-text1');
  var element2 = document.querySelector('.home-text2');
  element1.classList.add('animated','fadeInUp');
  element1.addEventListener('animationend',function(){
    element1.classList.remove('animated','fadeInUp');
    element1.classList.add('show');
    setTimeout(function(){
      element1.classList.remove('show');
      element2.classList.add('animated','fadeInUp');
      element2.addEventListener('animationend',function(){
        element2.classList.remove('animated','fadeInUp');
        element2.classList.add('show');
      });
    },5000);
  });
  setInterval(function(){
    element2.classList.remove('show');
    element1.classList.add('animated','fadeInUp');
    element1.addEventListener('animationend',function(){
      element1.classList.remove('animated','fadeInUp');
      element1.classList.add('show');
      setTimeout(function(){
        element1.classList.remove('show');
        element2.classList.add('animated','fadeInUp');
        element2.addEventListener('animationend',function(){
          element2.classList.remove('animated','fadeInUp');
          element2.classList.add('show');
        });
      },5000);
      });
},14000);
}

var fill;
var counter;
var maxVal;
var load_bar = function(){
  setTimeout(_load_bars,500);
}
function _load_bars(){
  var i,pb,pc,maxVal;
  for(i=0;i<10;i++){
    maxVal = document.getElementsByClassName("progress-bar")[i].getAttribute("aria-valuenow");
    pb = document.getElementsByClassName("progress-bar")[i];
    pc = document.getElementsByClassName("counter")[i];
    _load_bar(maxVal,pb,pc);
  }
}

function _load_bar(){
  var maxVal = arguments[0];
  var pb = arguments[1];
  var pc = arguments[2];
  if(pc.innerHTML == pc.getAttribute("value"))
  return;
  fill = 0;
  counter = 0;
  window.setInterval(function(){
    fill += 5;
    counter += 1;
    if(fill>maxVal){
      pb.style.width = maxVal + "%";
      window.setInterval(function(){
        counter += 1;
        if(counter<=maxVal)
          pc.innerHTML = counter;
        else{
          pc.innerHTML = maxVal;
          pc.setAttribute("value",maxVal)
          clearInterval();
        }
      },100);
      clearInterval();
    }
    else{
      pc.innerHTML = counter;
      pb.style.width = fill + "%";
    }
  },30);
}

var load_tiles = function(){
  var i;
  for(i=0;i<4;i++){
    var element = document.getElementsByClassName("tiles_info")[i];
    element.classList.add('animated','fadeInRight');
  }
}

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

var load_project_tiles = function(){
  setTimeout(function() {
  var i;
  for(i=0;i<9;i++){
    var element = document.getElementsByClassName("project")[i];
    element.classList.add('animated','fadeInUp');
  }
},250);
}

var load_education_poster = function(){
  var element = document.getElementsByClassName("education-poster")[0];
  element.classList.add('animated','fadeInUp');
  var tiles = document.getElementsByClassName("education-info");
  tiles[0].classList.add('animated','flipInX');
  setTimeout(function(){
    tiles[1].classList.add('animated','flipInX');
  },1000)
  setTimeout(function(){
    tiles[2].classList.add('animated','flipInX');
  },2000)
}

var load_info_tiles = function(){
  var i;
  for(i=0;i<6;i++){
    var element = document.getElementsByClassName("info-desc-title")[i];
    element.classList.add('animated','fadeInLeft');
  };
  var element = document.getElementsByClassName("info-desc-value");
  setTimeout(function(){
    element[0].classList.add('animated','flipInX');
  },800)
  setTimeout(function(){
    element[1].classList.add('animated','flipInX');
  },1600)
  setTimeout(function(){
    element[2].classList.add('animated','flipInX');
  },2400)
  setTimeout(function(){
    element[3].classList.add('animated','flipInX');
  },3000)
  setTimeout(function(){
    element[4].classList.add('animated','flipInX');
  },3600)
  setTimeout(function(){
    element[5].classList.add('animated','flipInX');
  },4200)
}


var load_quote = function(){
  var i=1;
  var element1 = document.querySelectorAll(".blog-quote-data")[0];
  var element2 = document.querySelectorAll(".blog-quote-author")[0];
  var element3 = document.querySelectorAll(".blog-quote-poster")[0];
  element1.classList.add('show','animated','flipInX');
  element2.classList.add('show','animated','flipInX');
  element3.classList.add('show','animated','fadeInLeft');
  setInterval(function(){
    if(i!=0){
      var element1 = document.querySelectorAll(".blog-quote-data")[i-1];
      var element2 = document.querySelectorAll(".blog-quote-author")[i-1];
      var element3 = document.querySelectorAll(".blog-quote-poster")[i-1];
      element1.classList.remove('show','animated','flipInX');
      element2.classList.remove('show','animated','flipInX');
      element3.classList.remove('show','animated','fadeInLeft');
    }
    var element1 = document.querySelectorAll(".blog-quote-data")[i];
    var element2 = document.querySelectorAll(".blog-quote-author")[i];
    var element3 = document.querySelectorAll(".blog-quote-poster")[i];
    element1.classList.add('show','animated','flipInX');
    element2.classList.add('show','animated','flipInX');
    element3.classList.add('show','animated','fadeInLeft');
    i = i+1;
    if(i>=5){
      i=0;
      setTimeout(function(){
        element1.classList.remove('show','animated','flipInX');
        element2.classList.remove('show','animated','flipInX');
        element3.classList.remove('show','animated','fadeInLeft');
      },5000)
    }
  },5000)
}


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
