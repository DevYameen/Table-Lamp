// Select the checkbox and add an event listener
const lampSwitch = document.getElementById('lampSwitch');
const body = document.body;
const lamp = document.querySelector('.lamp');
const nameDiv = document.querySelector('.name');

lampSwitch.addEventListener('change', function () {
  if (this.checked) {
    // Turn on the light
    lamp.style.display = 'block';      // Show the lamp
    nameDiv.style.display = 'block'; // Show the name div
  } else {
    // Turn off the light
   
    lamp.style.display = 'block';      // Show the lamp
    nameDiv.style.display = 'none';    // Hide the name div
  }
});
