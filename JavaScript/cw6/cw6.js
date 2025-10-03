const btn = document.querySelector('#change')
console.log(btn);
btn.onclick = function(){
    const szer = document.querySelector('#change').value;
    console.log(szer);
    const root = document.querySelector('#root').value;
    root.style.width = Number = "px";
}
const btn2 = document.querySelector('#expand')
console.log(btn);
btn2.onclick = function(){
    const szer = document.querySelector('#expand').value;
    console.log(szer);
    let width = root.offsetWidth;
    const root = document.querySelector('#root').value;
    root.style.width = Number(szer) + 10 + "px";
    root.style.height = Number(szer) + 10 + "px";
}
