let current = 0;

function carusel_init(carusel_id) {
	let car = document.getElementById(carusel_id);
	let blocks = car.children;
	for (var i = 1; i < 5; i++)
	{
		blocks[i].style.filter = 'blur(10px)';
		blocks[i].style.overflowY = 'hidden';
	}
}

function carusel_shift(carusel_id, direction) {
	let car = document.getElementById(carusel_id);
	let blocks = car.children;
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

	for (var i = 0; i < 5; i++)
	{
		if (i == current)
		{
			blocks[i].style.filter = 'none';
			blocks[i].style.overflowY = 'auto';
		}
		else
		{
			blocks[i].style.filter = 'blur(10px)';
			blocks[i].style.overflowY = 'hidden';
		}
	}
}