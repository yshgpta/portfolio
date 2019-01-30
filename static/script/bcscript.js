var load = function(){
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
  for(i=0;i<5;i++){
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