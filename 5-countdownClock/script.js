let i = setInterval(function() { 
var now = new Date().getTime();
 var countDownDate = new Date("Dec 31, 2020 00:00:00").getTime();
var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
//date = document.querySelector(".date");
 // units = document.querySelector(".units");
  day = document.querySelector(".days");
  day.innerText=days+":";
   hrs = document.querySelector(".hrs");
  hrs.innerText=hours+":";
   min = document.querySelector(".min");
  min.innerText=minutes+":";
   sec = document.querySelector(".sec");
  sec.innerText=seconds;
//time = days +" "+hours+" "+minutes+" "+seconds;
//date.innerText=time;
   if (distance < 0) {
   
    clearInterval(i);
     console.log("Happy New Year");
  }
}, 1000);
