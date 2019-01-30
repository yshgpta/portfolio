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
    load_progress_bar(maxVal,pb,pc);
  }
}

function load_progress_bar(){
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
