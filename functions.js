function message(msg){
    document.getElementById('output').innerHTML = msg + ' event';
}
function displayPicture(element){
    const frame = document.getElementById("frame");
    frame.style.backgroundImage= "url('"+element.src+"')";
    legenda.innerHTML = element.alt;
}

function undisplayPicture(){
    const frame = document.getElementById("frame");
    frame.style.backgroundImage = "none";
    legenda.innerHTML = ' ';
}
