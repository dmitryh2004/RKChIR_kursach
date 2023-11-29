function init_images_on_click() {
    let imgs = document.getElementsByTagName('img');
    for (var i = 0; i < imgs.length; i++)
    {
        var img_path = imgs[i].src;
        if (imgs[i].getAttribute("onclick") == null)
        {
            imgs[i].setAttribute("onclick", "window.open('" + img_path + "');");
        }
        
    }
}