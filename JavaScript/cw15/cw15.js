const elemMenu = document.querySelector('#menu');
elemMenu.oncontextmenu = function (e) {
    e.preventDefault();
    document.querySelector("#info1").innerHTML = "menu kontekstowe";
}
elemMenu.ondblclick = function (e) {
    e.preventDefault();
    if (elemMenu.style.backgroundColor != 'red')
        elemMenu.style.backgroundColor = 'red';
    else
        elemMenu.style.backgroundColor = 'white';
}
elemMenu.onmouseenter = function (e) {
    elemMenu.innerHTML = "najechano na menu";
}
elemMenu.onmouseleave = function (e) {
    elemMenu.innerHTML = "opuszczono menu";
}
setPositoin(document.querySelector('#sprite'));
function setPositoin(elem) {
    const sceneWidth = document.querySelector('#scene').style.width;
    const sceneHeight = document.querySelector('#scene').style.height;
    const xRandom = Math.floor(Math.random() * (parseInt(sceneWidth) - 100));
    const yRandom = Math.floor(Math.random() * (parseInt(sceneHeight)-20));
    elem.style.left = xRandom + 'px';
    elem.style.top = yRandom + 'px';
    console.log(sceneWidth, sceneHeight);
    console.log(xRandom, yRandom);

}

const sprite = document.querySelector('#sprite');

function setPosition(elem) {
    const boxWidth = document.querySelector('#box').offsetWidth;
    const boxHeight = document.querySelector('#box').offsetHeight;
    const xRandom = Math.floor(Math.random() * boxWidth);
    const yRandom = Math.floor(Math.random() * boxHeight);
    elem.style.left = xRandom + 'px';
    elem.style.top = yRandom + 'px';
}

setPosition(sprite);

sprite.style.opacity = '0';

sprite.onmouseenter = function () {
    sprite.style.opacity = '1';
    alert('Udało się znaleźć!');
    location.reload();
};
