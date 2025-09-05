function convertTemperature(value, from, to) {
            value = parseFloat(value);
            if (isNaN(value)) return null;
            let celsius;
            if (from === 'C') celsius = value;
            else if (from === 'F') celsius = (value - 32) * 5 / 9;
            else if (from === 'K') celsius = value - 273.15;
            let result;
            if (to === 'C') result = celsius;
            else if (to === 'F') result = celsius * 9 / 5 + 32;
            else if (to === 'K') result = celsius + 273.15;
            return result;
        }
        document.getElementById('convertBtn').addEventListener('click', function() {
            const tempInput = document.getElementById('tempInput').value.trim();
            const unitFrom = document.getElementById('unitFrom').value;
            const unitTo = document.getElementById('unitTo').value;
            const resultDiv = document.getElementById('result');
            resultDiv.classList.remove('error');
            if (tempInput === '' || isNaN(tempInput)) {
                resultDiv.textContent = 'Please enter a valid number for temperature.';
                resultDiv.classList.add('error');
                return;
            }
            if (unitFrom === unitTo) {
                resultDiv.textContent = `No conversion needed. Value: ${parseFloat(tempInput).toFixed(2)} ${unitTo === 'C' ? '°C' : unitTo === 'F' ? '°F' : 'K'}`;
                return;
            }
            const converted = convertTemperature(tempInput, unitFrom, unitTo);
            if (converted === null) {
                resultDiv.textContent = 'Invalid input.';
                resultDiv.classList.add('error');
            } else {
                let unitLabel = unitTo === 'C' ? '°C' : (unitTo === 'F' ? '°F' : 'K');
                resultDiv.textContent = `Converted Temperature: ${converted.toFixed(2)} ${unitLabel}`;
            }
        });