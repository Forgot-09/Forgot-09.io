const clock = document.querySelector("#clock");
clock.innerText = "00:00";

function getDate() {
    const date = new Date();
    const hour = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    clock.innerText = `${hour}:${minutes}:${seconds}`;
}

getDate();
setInterval(getDate, 1000);