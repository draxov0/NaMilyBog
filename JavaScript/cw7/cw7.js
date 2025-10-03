const btn = document.querySelector("#show")
btn.onclick = function () {
    let value = document.querySelector("#range").value
    document.querySelector("#info").innerHTML = value;
}
document.querySelector("#range").innerHTML = 