window.onload = updateTime();

function updateTime(){
    const currentTime = dayjs(); //fetch current time
    const hour = currentTime.hour(); //variable setting
    const minute = currentTime.minute(); //variable setting
    const second = currentTime.second(); //variable setting
    const timestring = `${hour}:${minute}:${second}`;
    const timebar = document.getElementById('time');
    timebar.innerHTML = timestring;
  
    const date = currentTime.date();
    const month = currentTime.format('MMMM');
    const year = currentTime.year();
    const day = currentTime.format('dddd');
    const datestring = `${day}, ${date} ${month}, ${year}`;
    const datebar = document.getElementById('date');
    datebar.innerHTML = datestring;
}

setInterval(updateTime, 1000);
