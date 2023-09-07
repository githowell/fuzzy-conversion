function convert() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const unitForm = document.getElementById('unitForm').value;

    if (!isNaN(inputValue)) {
        
      let Millimeters, Centimeter, Meters;


      if (unitForm === 'Inches') {
        Millimeters = inputValue * 25.4;
        Centimeters = inputValue * 2.54;
        Meters = inputValue * 0.025;

      }  else if (unitForm === 'Feet') {
        Millimeters = inputValue * 304.8;
        Centimeters = inputValue * 30.48;
        Meters = inputValue * 0.305;
        
      } else {
        Millimeters = inputValue * 914.4;
        Centimeters = inputValue * 91.44;
        Meters = inputValue * 0.9144;
      }

      document.getElementById('resultMillimeters').textContent = Millimeters.toFixed(2) + ' mm';
      document.getElementById('resultCentimeters').textContent = Centimeters.toFixed(2) + ' cm';
      document.getElementById('resultMeters').textContent = Meters.toFixed(2) + ' m';

    } else {

      alert('Please enter a valid number for distance.');

    }
  }