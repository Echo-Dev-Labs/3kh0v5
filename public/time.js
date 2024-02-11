let timeString;
let batteryLevel;

navigator.getBattery().then(function(battery) {
  function getTimeFromSeconds(seconds) {
    if (battery.charging && (seconds === Infinity || battery.level === 1)) {
      return "Fully Charged";
    } else if (seconds < 0) {
      return "Calculating...";
    } else {
      let date = new Date(1970, 0, 1);
      date.setSeconds(seconds);
      return date.toTimeString().substring(0, 5);
    }
  }

  function updateBatteryStatus() {
    let now = new Date();
    let hours = now.getHours();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');
    let currentTime = ` ${hours}:${minutes} ${ampm}`;

    batteryLevel = battery.level * 100;
    setTimeout(updateBatteryStatus, 1000);

    if (battery.charging) {
      timeString = getTimeFromSeconds(battery.chargingTime) + " Until Full";
    } else {
      timeString = getTimeFromSeconds(battery.dischargingTime) + " Until Dead";
    }

    var fullthing = "<span class='material-symbols-outlined' style='vertical-align: text-bottom'>schedule</span> " +  " " + currentTime + " - " + "<span class='material-symbols-outlined' style='vertical-align: text-bottom'>battery_profile</span> " + batteryLevel + "%";
    document.getElementById('time-clock').innerHTML = fullthing;
    return timeString;
  }

  updateBatteryStatus();

  battery.addEventListener('chargingchange', updateBatteryStatus);
  battery.addEventListener('chargingtimechange', updateBatteryStatus);
  battery.addEventListener('dischargingtimechange', updateBatteryStatus);
  battery.addEventListener('levelchange', updateBatteryStatus);
});
