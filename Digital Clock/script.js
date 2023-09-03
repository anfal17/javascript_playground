
setInterval(() => {
    let d = new Date();//it must be onside setInterval or else time wont update

  let hours = document.getElementById("hour");
  let minutes = document.getElementById("minutes");
  let seconds = document.getElementById("seconds");
  hours.innerHTML = d.getHours() < 10 ? "0" + d.getHours() : d.getHours();
  minutes.innerHTML =
    d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes();
  seconds.innerHTML =
    d.getSeconds() < 10 ? "0" + d.getSeconds() : d.getSeconds();
}, 1000);
