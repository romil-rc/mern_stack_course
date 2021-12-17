
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

// For displaying dynamic content 
function DisplayContent() {
    
    var container = document.createElement('div');
    container.className ="container";
    container.id = "dynamic-block";

    document.getElementById('left-container').appendChild(container);

    var wakeup_selector_value = document.getElementById('wakeupTimeSelector');
    var lunch_selector_value = document.getElementById('lunchTimeSelector');
    var nap_selector_value = document.getElementById('napTimeSelector');

    var value = [];

    value[0] = wakeup_selector_value.options[wakeup_selector_value.selectedIndex].text;
    value[1] = lunch_selector_value.options[lunch_selector_value.selectedIndex].text;
    value[2] = nap_selector_value.options[nap_selector_value.selectedIndex].text;

    document.getElementById('dynamic-block').innerHTML = "Wake up time : " + value[0];
    document.getElementById('dynamic-block').innerHTML += "<br>Lunch time : " + value[1];
    document.getElementById('dynamic-block').innerHTML += "<br>Nap time : " + value[2];
    
}

// Button 
function set_time() {

    var current_hour = new Date().getHours();

    var wakeUp = document.getElementById('wakeupTimeSelector').value;
    
    if(wakeUp == current_hour) {
        document.getElementById('bottom-picture').style.backgroundImage = "url(./assets/wakeup_image.png)";
        document.getElementById('bottom-picture').innerHTML = "Wake Up !!";
    }

    var lunch = document.getElementById('lunchTimeSelector').value;

    if(lunch == current_hour) {
        document.getElementById('bottom-picture').style.backgroundImage = "url(./assets/lunch_image.png)";
        document.getElementById('bottom-picture').innerHTML = "Let's have some lunch !!";
    }

    var nap = document.getElementById('napTimeSelector').value;

    if(nap == current_hour) {
        document.getElementById('bottom-picture').style.backgroundImage = "url(./assets/goodnight_image.png)";
        document.getElementById('bottom-picture').innerHTML = "Good Night !!";
    }

    
    DisplayContent();

    document.getElementById("set-button").onclick = null;
    
}