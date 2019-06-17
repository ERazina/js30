let minHand = document.querySelector('.clock-minHand');
let secHand = document.querySelector('.clock-secondsHand');
let hourHand = document.querySelector('.clock-hourHand');

function go (){
    let time = new Date();
    let hour = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    let secondDegree = ((seconds / 60) * 360) - 90;
    secHand.style.transform = `rotate(${secondDegree}deg)`;

    let minutesDegree = ((minutes / 60) * 360) - 90;
    minHand.style.transform = `rotate(${minutesDegree}deg)`;

    let hoursDegree = ((hour / 12) * 360) - 90;
    hourHand.style.transform = `rotate(${hoursDegree}deg)`;
}

setInterval(go, 1000);