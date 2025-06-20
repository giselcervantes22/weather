function showweatherDetails(event) {
    event.preventDefault();
    
    // Obtener el valor de la ciudad DENTRO de la función
    const city = document.getElementById('city').value;
    
    // Validar que se ingresó una ciudad
    if (!city) {
        alert('Por favor ingresa una ciudad');
        return;
    }
    
    const apiKey = '3a5ce244261be337370afccee550e297';
    // URL corregida - usando el nombre de la ciudad
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    // Mostrar mensaje de carga
    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = '<p>Cargando información del clima...</p>';
    
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Ciudad no encontrada');
            }
            return response.json();
        })
        .then(data => {
            // Mostrar la información del clima
            weatherInfo.innerHTML = `
                <h2>Weather in ${data.name}</h2>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
                <p>Feels like: ${data.main.feels_like}°C</p>
                <p>Humidity: ${data.main.humidity}%</p>
            `;
        })
        .catch(error => {
            // Manejo de errores
            weatherInfo.innerHTML = `<p>Error: ${error.message}</p>`;
        });
}

// Event listener
document.getElementById('weatherForm').addEventListener('submit', showweatherDetails);
