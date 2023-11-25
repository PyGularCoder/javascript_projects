const clock = document.getElementById('clock');
const hourHand = document.getElementById('hour');
const minuteHand = document.getElementById('minute');
const secondHand = document.getElementById('second');
const centerDot = document.getElementById('center-dot');

function createHourNumbers() {
  const hourNumbersContainer = document.querySelector('.hour-numbers');

  const numHours = 12;
  const radius = 100; // Adjust the radius as needed
  const angleIncrement = (360 / numHours) * (Math.PI / 180);

  for (let i = 1; i <= numHours; i++) {
    const hourNumber = document.createElement('div');
    hourNumber.className = 'hour-number';

    const angle = angleIncrement * (i - 15); // Distribute numbers around the circle
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);

    hourNumber.innerHTML = i;
    hourNumber.style.transform = `translate(${x}px, ${y}px)`;
    hourNumbersContainer.appendChild(hourNumber);
  }
}

function createbrandText() {
  const customTextContainer = document.createElement('div');
  customTextContainer.className = 'custom-text';
  customTextContainer.innerHTML = 'Code with Rumi<br>PyGularcoder';
  clock.appendChild(customTextContainer);
}
createHourNumbers();
createbrandText()


setInterval(function () {
  let date = new Date();

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  // Calculate degrees for each hand
  let hourRotation = (360 * (hours % 12 + minutes / 60)) / 12;
  let minuteRotation = (360 * (minutes + seconds / 60)) / 60;
  let secondRotation = (360 * seconds) / 60;

  // quick transition duration transform 0.0s,
  hourHand.style.transition = 'transform 0.0s';
  minuteHand.style.transition = 'transform 0.0s ';
  secondHand.style.transition = 'transform 0.0s ';
  centerDot.style.transition = 'transform 0.0s';

  hourHand.style.transform = `rotate(${hourRotation}deg)`;
  minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
  secondHand.style.transform = `rotate(${secondRotation}deg)`;
  centerDot.style.transform = 'rotate(0deg)'; // Keep the center dot fixed
}, 1000);
