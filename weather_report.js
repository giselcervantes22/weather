function showweatherDetails(event) {
    event.preventDefault();
    
    const city = document.getElementById('city').value.trim();
    
    if (!city) {
        alert('Por favor ingresa una ciudad');
        return;
    }
    
    const apiKey = '3a5ce244261be337370afccee550e297';
    
    // Prueba con país específico para mayor precisión
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},MX&appid=${apiKey}&units=metric`;
    
    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = '<p>Cargando información del clima...</p>';
    
    fetch(apiUrl)
        .then(response => {
            console.log('Response status:', response.status); // Para debugging
            if (!response.ok) {
                // Si falla con ",MX", prueba sin especificar país
                const fallbackUrl = `function showweatherDetails(event) {
    event.preventDefault();
    
    const city = document.getElementById('city').value.trim();
    
    if (!city) {
        alert('Por favor ingresa una ciudad');
        return;
    }
    
    // Prueba con esta API key temporal (reemplaza con la tuya cuando esté activa)
    const apiKey = 'b8ecb572c0d51131975b2ba0c7bcbe29';
    
    // Prueba con país específico para mayor precisión
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},MX&appid=${apiKey}&units=metric`;
    
    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = '<p>Cargando información del clima...</p>';
    
    fetch(apiUrl)
        .then(response => {
            console.log('Response status:', response.status); // Para debugging
            if (!response.ok) {
                // Si falla con ",MX", prueba sin especificar país
                const fallbackUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
                return fetch(fallbackUrl);
            }
            return response;
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Ciudad no encontrada. Código: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Weather data:', data); // Para debugging
            weatherInfo.innerHTML = `
                <h2>Weather in ${data.name}, ${data.sys.country}</h2>
                <p>Temperature: ${Math.round(data.main.temp)}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
                <p>Feels like: ${Math.round(data.main.feels_like)}°C</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
            `;
        })
        .catch(error => {
            console.error('Error:', error); // Para debugging
            weatherInfo.innerHTML = `<p>Error: ${error.message}</p>
                                   <p>Intenta con: "Puerto Vallarta", "Guadalajara", "Mexico City"</p>`;
        });
}

document.getElementById('weatherForm').addEventListener('submit', showweatherDetails);`;
                return fetch(fallbackUrl);
            }
            return response;
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Ciudad no encontrada. Código: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Weather data:', data); // Para debugging
            weatherInfo.innerHTML = `
                <h2>Weather in ${data.name}, ${data.sys.country}</h2>
                <p>Temperature: ${Math.round(data.main.temp)}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
                <p>Feels like: ${Math.round(data.main.feels_like)}°C</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
            `;
        })
        .catch(error => {
            console.error('Error:', error); // Para debugging
            weatherInfo.innerHTML = `<p>Error: ${error.message}</p>
                                   <p>Intenta con: "Puerto Vallarta", "Guadalajara", "Mexico City"</p>`;
        });
}

document.getElementById('weatherForm').addEventListener('submit', showweatherDetails);
