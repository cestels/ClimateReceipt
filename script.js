document.addEventListener("DOMContentLoaded", function() {
    const apiKey = '68f596dee38f888e05ba30c08cc79104'; 
    const city = 'Urbino';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weatherElement = document.getElementById('weather');
            if (data.main) {
                const temperature = data.main.temp;
                weatherElement.innerHTML = `<p>Urbino - ${temperature.toFixed(2)}°C</p>`;
            } else {
                weatherElement.innerHTML = `<p>error</p>`;
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            document.getElementById('weather').innerHTML = `<p>Error fetching weather data</p>`;
        });

     fetch(url)
        .then(response => response.json())
        .then(data => {
            const weatherElement = document.getElementById('temp');
            if (data.main) {
                const temperature = data.main.temp;
                weatherElement.innerHTML = `<h2 style="font-size: 100px; text-align: left;" >${temperature.toFixed(2)}°C</h2>`;
            } else {
                weatherElement.innerHTML = `<h2>error</h2>`;
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            document.getElementById('weather').innerHTML = `<p>Error fetching weather data</p>`;
        });

    
});

