function startAboutSecret() {
    document.getElementById('audio').play(); 
    document.getElementById('authorImage').setAttribute('ondblclick', '');
    var border = document.getElementById('border');
    border.style.animation = "border-rotating 5s linear 0s infinite backwards,\
    border-change-color 30s linear 1.25s infinite backwards,\
    border-opacity 2.5s linear 0s infinite backwards";
}