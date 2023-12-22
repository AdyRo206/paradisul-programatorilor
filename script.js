var countDownDate = new Date("Feb 13, 2024 14:50:25").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();


  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML = days + " zile " + hours + " ore "
  + minutes + " minute " + seconds + " secunde ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "Site-ul nostru va fi gata in curand";
  }
}, 1000);
