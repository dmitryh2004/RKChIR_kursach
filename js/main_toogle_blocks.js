let show_more = "Кликните мышкой сюда, чтобы просмотреть краткое содержание.";
let secs_short = [];
let writeout_duration = [];
let WRITEOUT_DELAY = 4;

function main_toogle_blocks_init() {
    secs_short.push("История самокатов начинается с 1761 года: именно тогда появился его первый прототип. С этого момента самокаты претерпели значительные изменения: раньше они были похожи на беговел. В 1985 году Стив Патмонт сконструировал самокат с мотором, положив начало развитию электросамокатов.<br>Сейчас самокаты подразделяются на несколько типов, среди которых есть и электросамокаты. Разделение обусловлено разными задачами, под которые создаются самокаты.");
    secs_short.push("Электросамокат состоит из следующих основных деталей: металлической рамы, электродвигателя, аккумулятора, платформы для ног, руля с элементами управления и двух колес с амортизацией. По устройству электродвигателя выделяются цепные электросамокаты и электросамокаты с мотор-колесом; они, в свою очередь, подразделяются на безредукторные и мотор-колеса с планетарным редуктором.");
    secs_short.push("Сегодня электросамокаты являются средствами индивидуальной мобильности (или СИМ). Они, как и автомобили, считаются транспортным средством. Но до 1 марта 2023 года статус электросамокатов был другим. Почему он был изменен и как сильно он изменился?");
    secs_short.push("Электросамокаты в российском обществе, да и во многих других местах мира, имеют довольно плохую репутацию, а в некоторых городах они и вовсе запрещены для проката. Что именно повлияло на формирование такого мнения об электросамокатах и лицах, их использующих?");
    for (var i = 0; i < secs_short.length; i++)
    {
        writeout_duration.push(secs_short[i].length * WRITEOUT_DELAY);
    }
    writeout_duration.push(show_more.length * WRITEOUT_DELAY);
}

function deanimate(elem_id, duration) {
    let elem = document.getElementById(elem_id);
    let current_string = elem.innerHTML;
    let length = current_string.length;
    var delay = duration / length;
    let i = length - 1;
    let timerId = setInterval(function() {
        if (i == 0) {
            clearInterval(timerId);
        }
        else {
            current_string = current_string.substring(0, i);
            elem.innerHTML = current_string;
            i--;
        }
    }, delay);
}

function animate_output(elem_id, string, duration) {
    let current_string = "";
    let length = string.length;
    var delay = duration / length;
    let elem = document.getElementById(elem_id);
    let i = 0;
    let timerId = setInterval(function() {
        if (i == length) {
            clearInterval(timerId);
        }
        else {
            current_string += string[i];
            elem.innerHTML = current_string;
            i++;
        }
    }, delay);
}

function toogle_block(elem_id, show, index, animate) {
    elem = document.getElementById(elem_id);
    if (!show)
    {
        if (animate)
        {
            deanimate(elem_id, writeout_duration[index]);
            let timerId = setTimeout(function() {elem.style.color = "#fff"; animate_output(elem_id, show_more, writeout_duration[4]);}, writeout_duration[index]);
        }
        else
        {
            elem.style.color = "#fff";
            elem.innerHTML = show_more;
        }
        elem.setAttribute("onclick", "toogle_block('" + elem_id + "', true, " + index + ", true);");
    }
    else
    {   
        if (animate)
        {
            deanimate(elem_id, writeout_duration[4]);
            let timerId = setTimeout(function() {elem.style.color = "#000"; animate_output(elem_id, secs_short[index], writeout_duration[index]);}, writeout_duration[4]);
        }
        else
        {
            elem.style.color = "#000";
            elem.innerHTML = secs_short[index];
        }
        elem.setAttribute("onclick", "toogle_block('" + elem_id + "', false, " + index + ", true);");
    }
}