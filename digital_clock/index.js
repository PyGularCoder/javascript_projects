

document.addEventListener('DOMContentLoaded', function () {
  const body = document.body;

  // Apply styles using the style property
  body.style.backgroundImage = "url('/digital_clock/bg.jpg')";
  body.style.backgroundSize = "98%";
  body.style.backgroundPosition = "center";
  body.style.backgroundRepeat = "no-repeat";
  body.style.color = "#1f1a1a";
  body.style.margin = "0";
  body.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
  body.style.display = "flex";
  body.style.flexDirection = "column";
  body.style.alignItems = "flex-start";
  body.style.justifyContent = "flex-start";
  body.style.height = "100vh";
  body.style.padding = "0px";

  const nav = document.querySelector('nav');
  
  nav.style.margin = "0";
  nav.style.padding = "10px";
  nav.style.display = "flex";
  nav.style.width = "100%";
  nav.style.justifyContent = "space-around";
  nav.style.backgroundColor = "#333";
  nav.style.zIndex = "3";

  const navLinks = document.querySelectorAll('nav a');

  navLinks.forEach(link => {
    link.style.color = "#fff";
    link.style.textDecoration = "none";
  });

  const clockContainer = document.getElementById('clock-container');
  
  clockContainer.style.position = "relative";
  clockContainer.style.textAlign = "center";
  clockContainer.style.width = "240px";
  clockContainer.style.height = "240px";
  clockContainer.style.left = "10%";
  clockContainer.style.top = "10%";

  const banner = document.getElementById('banner');

  banner.style.fontSize = "24px";
  banner.style.marginBottom = "10px";


  
  const clock = document.getElementById('clock');
  const hourHand = document.getElementById('hour');
  const minuteHand = document.getElementById('minute');
  const secondHand = document.getElementById('second');
  const centerDot = document.getElementById('center-dot');
  const hourNumbersContainer = document.querySelector('.hour-numbers');
  const customTextContainer = document.querySelector('.custom-text');

  const elements = [hourHand, minuteHand, secondHand, centerDot];

  // Cache frequently accessed elements
  elements.forEach(element => element.classList.add('transition'));

  function convertToRoman(num) {
    const romanNumerals = [
      '', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'
    ];
    return romanNumerals[num];
  }

  function createHourNumbers() {
    const numHours = 12;
    const radius = 100; // Adjust the radius as needed
    const angleIncrement = (360 / numHours) * (Math.PI / 180);

    const fragment = document.createDocumentFragment();

    for (let i = 1; i <= numHours; i++) {
      const hourNumber = document.createElement('div');
      hourNumber.className = 'hour-number';

      const angle = angleIncrement * (i - 15); // Distribute numbers around the circle
      const x = radius * Math.cos(angle);
      const y = radius * Math.sin(angle);

      hourNumber.innerHTML = convertToRoman(i);
      hourNumber.style.transform = `translate(${x}px, ${y}px)`;
      fragment.appendChild(hourNumber);
    }

    hourNumbersContainer.appendChild(fragment);
  }

  function createBrandText() {
    customTextContainer.innerHTML = 'Code with Rumi<br>PyGularcoder';
    clock.appendChild(customTextContainer);
  }

  function updateClock() {
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

    elements.forEach(element => element.style.transform = 'rotate(0deg)'); // Keep the center dot fixed
    hourHand.style.transform = `rotate(${hourRotation}deg)`;
    minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
    secondHand.style.transform = `rotate(${secondRotation}deg)`;

    requestAnimationFrame(updateClock);
  }

  createHourNumbers();
  createBrandText();
  updateClock();
});


