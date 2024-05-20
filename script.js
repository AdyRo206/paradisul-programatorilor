let countDownDate = new Date("Feb 13, 2024 14:50:25").getTime();

let x = setInterval(function() {

  let now = new Date().getTime();


  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML = days + " zile " + hours + " ore "
  + minutes + " minute " + seconds + " secunde ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "Site-ul nostru va fi gata in curand";
  }
}, 1000);

