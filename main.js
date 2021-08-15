setInterval(() => {
    // console.log("i am gonna increase by 1 every sec");
    let d = new Date();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();
    let hour_hand_rotation = 30 * hours + minutes / 2;
    let minute_hand_rotation = 6 * minutes;
    let second_hand_rotation = 6 * seconds;

    hour.style.transform = `rotate(${hour_hand_rotation}deg)`;
    minute.style.transform = `rotate(${minute_hand_rotation}deg)`;
    second.style.transform = `rotate(${second_hand_rotation}deg)`;

}, 1000);
