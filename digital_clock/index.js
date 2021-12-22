
// For Digital Clock 

function clock() {

    var hours = document.getElementById("hours");
    var minutes = document.getElementById("minutes");
    var seconds = document.getElementById("seconds");
    var am = document.getElementById("am");

    var time = new Date();
    var time_hours = time.getHours();
    var time_minutes = time.getMinutes();
    var time_seconds = time.getSeconds();
    
    hours.innerHTML = time_hours;
    if(hours.innerHTML >= 12) {
        $(hours).text(hours.innerHTML - 12);
        $(am).text("PM");
    }
    minutes.innerHTML = time_minutes;
    seconds.innerHTML = time_seconds;

}
setInterval(clock, 1000);

//  Button onclick 

function set_time() {

    var current_hour = new Date().getHours();

    var wakeUp = document.getElementById('wakeupTimeSelector');

    if(wakeUp.value == current_hour) {
        document.getElementById('bottom-picture').style.backgroundImage = "url(./assets/wakeup_image.png)";
        document.getElementById('bottom-picture').innerHTML = "Wake Up !!";
    }

    var lunch = document.getElementById('lunchTimeSelector');

    if(lunch.value == current_hour) {
        document.getElementById('bottom-picture').style.backgroundImage = "url(./assets/lunch_image.png)";
        document.getElementById('bottom-picture').innerHTML = "Let's have some lunch !!";
    }

    var nap = document.getElementById('napTimeSelector');

    if(nap.value == current_hour) {
        document.getElementById('bottom-picture').style.backgroundImage = "url(./assets/goodnight_image.png)";
        document.getElementById('bottom-picture').innerHTML = "Good Night !!";
    }

    document.getElementById("set-button").addEventListener("click", displayContent(wakeUp, lunch, nap));
    
}

//  Dynamic display    

function displayContent(wakeupTimeSelector,lunchTimeSelector,napTimeSelector) {
    
    var container = document.createElement('div');
    container.className ="container";
    container.id = "dynamic-block";

    document.getElementById('left-container').appendChild(container);

    var value = [];

    value[0] = wakeupTimeSelector.options[wakeupTimeSelector.selectedIndex].text;
    value[1] = lunchTimeSelector.options[lunchTimeSelector.selectedIndex].text;
    value[2] = napTimeSelector.options[napTimeSelector.selectedIndex].text;

    document.getElementById('dynamic-block').innerHTML = "Wake up time : " + value[0];
    document.getElementById('dynamic-block').innerHTML += "<br>Lunch time : " + value[1];
    document.getElementById('dynamic-block').innerHTML += "<br>Nap time : " + value[2];
    
}