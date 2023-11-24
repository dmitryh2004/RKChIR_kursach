function toogle_nav(show){
	var btn = document.getElementById("nav_toogle");
	var ol = document.getElementById("nav_ol");
	
	if (show)
	{
		ol.style.display = "block";
		btn.textContent = "Скрыть";
		btn.setAttribute("onclick", "toogle_nav(false);");
	}
	else {
		ol.style.display = "none";
		btn.textContent = "Показать содержание";
		btn.setAttribute("onclick", "toogle_nav(true);");
	}
}