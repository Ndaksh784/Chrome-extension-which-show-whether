document.getElementById('fetch-weather').addEventListener('click', async () => {
    const city = document.getElementById('city').value;
    const apiKey = '8d5e98528bb2d2f4ce3b6a13ab888123';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      if (data.cod === 200) {
        document.getElementById('city-name').innerText = `City: ${data.name}`;
        document.getElementById('temperature').innerText = `Temperature: ${data.main.temp}°C`;
        document.getElementById('description').innerText = `Weather: ${data.weather[0].description}`;
  
        // Set the weather icon
        const iconCode = data.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
        document.getElementById('weather-icon').src = iconUrl;
  
        document.getElementById('weather-info').style.display = 'block';
        document.getElementById('error-message').style.display = 'none';
      } else {
        document.getElementById('error-message').innerText = `Error: ${data.message}`;
        document.getElementById('error-message').style.display = 'block';
        document.getElementById('weather-info').style.display = 'none';
      }
    } catch (error) {
      console.error('Error fetching weather:', error);
      document.getElementById('error-message').innerText = 'Error fetching weather data';
      document.getElementById('error-message').style.display = 'block';
      document.getElementById('weather-info').style.display = 'none';
    }
  });
  