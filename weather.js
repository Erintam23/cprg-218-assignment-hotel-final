fetch (
    'https://api.openweathermap.org/data/2.5/weather?q=Cancún&appid=0c0391d6d3bdcfb5024a3dd89cf513fa&units=metric'
)
.then(response => response.json())
	.then(data => {
		console.log(data);
        console.log(data.main.temp);
    

    const weathericon =
    'https://openweathermap.org/img/wn/' +
    data.weather[0].icon +
    '@2x.png';
console.log(weathericon);

icon.src = weathericon;
icon.alt = data.weather[0].description;

temperature.textContent =
'Temperature: ' + data.main.temp;
humidity.textContent = 'Humidity: ' + data.main.humidity;
})
