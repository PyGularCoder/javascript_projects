const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  let feet = parseInt(document.querySelector('#height-feet').value);
  let inches = parseInt(document.querySelector('#height-inches').value);
  let weight = parseInt(document.querySelector('#weight').value);
  let results = document.querySelector('#results');

  if (feet === '' || feet < 0 || isNaN(feet) || inches === '' || inches < 0 || isNaN(inches)) {
    results.innerHTML = "<span style='color: #ff0000;'>Please enter a valid Height</span>";
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = "<span style='color: #ff0000;'>Please enter a valid Height</span>";
  } else {
    // Convert height to centimeters
    const heightInCm = (feet * 30.48) + (inches * 2.54);
    
    // Calculate BMI
    const bmi = weight / Math.pow(heightInCm / 100, 2);

    // Display BMI result
    results.innerHTML = `<span style='color: #121212; font-size: 24px;'>${bmi.toFixed(2)}</span>`;

    // Determine BMI category
    let categoryMessage = "";
    if (bmi < 18.6) {
      categoryMessage = "<span style='color: #ff0000;'>Underweight, Your BMI is less than 18.6</span>";
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      categoryMessage = "<span style='color: #00cc00;'>Normal Range, Your BMI is between 18.6 and 24.9</span>";
    } else {
      categoryMessage = "<span style='color: #ffcc00;'>Overweight, Your BMI is greater than 24.9</span>";
    }

    // Display BMI category message
    results.innerHTML += `<br>${categoryMessage}`;
  }
});
