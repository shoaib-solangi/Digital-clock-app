let currentTime = new Date();
let hrs = document.getElementsByClassName("hours")[0];
let min = document.getElementsByClassName("mins")[0];
let sec = document.getElementsByClassName("sec")[0];
let year = document.getElementsByClassName("year")[0];
let month = document.getElementsByClassName("month")[0];
let date = document.getElementsByClassName("date")[0];
let day = document.getElementsByClassName("day")[0];

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
setInterval(() => {
    currentTime = new Date();
    hrs.innerHTML = currentTime.getHours().toString().padStart(2, '0');
    min.innerHTML = currentTime.getMinutes().toString().padStart(2, '0');

        sec.innerHTML = currentTime.getSeconds().toString().padStart(2, '0');
    year.innerHTML = currentTime.getFullYear().toString();
    month.innerHTML = months[currentTime.getMonth()];
    date.innerHTML =currentTime.getDate().toString().padStart(2, '0');
    day.innerHTML = days[currentTime.getDay()];
   

}, 1000);


