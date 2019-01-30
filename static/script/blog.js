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
