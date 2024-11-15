const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')  // Anoother mthod but funcyion is same

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());    // Output on console
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
