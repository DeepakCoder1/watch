setInterval(setclock, 1000)

const hourhand = document.querySelector('[data-hour-hand]');
const hourminuite = document.querySelector('[data-minuite-hand]');
const hoursecond = document.querySelector('[data-second-hand]');

function setclock() {
    const currentDate = new Date();

    const secondRatio = currentDate.getSeconds() / 60;
    const minutiesRatio = (secondRatio + currentDate.getMinutes()) / 60;
    const hourRatio = (minutiesRatio + currentDate.getHours()) / 12;

    setrotation(hoursecond, secondRatio);
    setrotation(hourminuite, minutiesRatio);
    setrotation(hourhand, hourRatio);

}

function setrotation(element, rotationratio) {
    // element.style.setProperty('--rotation', `${rotationratio * 360}deg`);
    element.style.transform = `rotate(${rotationratio * 360}deg)`;
}
setclock()