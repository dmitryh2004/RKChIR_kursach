let current = 0;

function carusel_shift(carusel_id, direction) {
	let car = document.getElementById(carusel_id);
	if (direction == true) 
	{
		current--;
		if (current == -1)
		{
			current = 4;
		}
	}
	else 
	{
		current++;
		if (current == 5)
		{
			current = 0;
		}
	}
	car.style.setProperty("--state", current);
}