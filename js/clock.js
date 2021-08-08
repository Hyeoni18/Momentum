const clock = document.querySelector("span#clock");
const ddaytext = document.querySelector("span#ddayText");

function getClock() {
    const date = new Date();
    const trip = new Date("2023/5/15");
    const dday = trip-date;
    const day = Math.floor(dday / (1000 * 60 * 60 * 24));
    //ddaytext.innerText = `여행가기 ${day}일 전`;

    const hour = String(date.getHours()).padStart(2,"0");
    const min =  String(date.getMinutes()).padStart(2,"0");
    
    clock.innerText = `${hour}:${min}`;
}

getClock();
setInterval(getClock, 60000);
