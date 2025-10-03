const elemMenu = document.querySelector('#gora');

elemMenu.onmouseenter = function (e) {
    elemMenu.innerHTML = "baner2.png";
}
elemMenu.onmouseleave = function (e) {
    elemMenu.innerHTML = "baner1.png";
}

