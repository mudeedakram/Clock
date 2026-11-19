let hr = document.getElementById('hour');
let min = document.getElementById('min');
let s = document.getElementById('s');
let m = document.getElementById('m');
let h = document.getElementById('h');
let sec = document.getElementById('sec');
let day = document.getElementById('day');
let month= document.getElementById('month');
let year = document.getElementById('year');
let day_name = document.getElementById('day_name');
let ampm = document.getElementById('ampm');

function displayTime(){
    let date = new Date();

    // Getting hour, mins, secs from date
    let hh = date.getHours()%12;
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let days = date.getDate();
    let months = date.getMonth()+1;
    let years = date.getFullYear();

    let hRotation = 30*hh + mm/2;
    let mRotation = 6*mm;
    let sRotation = 6*ss;
    s.innerHTML = ss.toString().padStart(2, '0');;
    m.innerHTML = mm.toString().padStart(2, '0');;
    if(hh == 0){
        hh = 12;
        h.innerHTML = hh.toString().padStart(2, '0');;
    }
    else{
        h.innerHTML = hh.toString().padStart(2, '0');;

    }
    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;
    let ampm1 = hh > 12 ? 'AM' : 'PM';
    ampm.innerHTML = ampm1;


    // day.innerHTML = days;
    // month.innerHTML = months;
    // year.innerHTML = years;
    let dayName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let currentDayName = dayName[date.getDay()];
      day_name.innerHTML = currentDayName;
    console.log(currentDayName)
    day.innerHTML = days.toString().padStart(2, '0'); // padStart() method se leading zero add karein
month.innerHTML = (months).toString().padStart(2, '0');
year.innerHTML = years;


}
function togglebotton(){
    document.body.classList.toggle('light-theme');
    if (document.body.classList.contains('light-theme')) {
        localStorage.setItem('theme', 'light');
        document.body.style.backgroundColor = "white";
    } else {
        localStorage.setItem('theme', 'dark');
        document.body.style.backgroundColor = "#212121";
    }

}

setInterval(displayTime, 1000);