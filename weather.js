const temp = document.getElementById('temp');
  const condition = document.getElementById('condition');
  const icon = document.getElementById('icon');

fetch (

)
.then(response => response.json())
	.then(data => {
		console.log(data);
        console.log(data.main.temp);
    })