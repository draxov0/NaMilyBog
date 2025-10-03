const inputs = document.querySelectorAll('input[type=range]');
console.log(inputs);
for(let i=0;i<inputs.length;i++){
    inputs[i].oninput = function(){
        const color = inputs[i].id;
        document.body.style.backgroundColor = `rgb(${inputs[0].value}, ${inputs[1].value}, ${inputs[2].value})`
        const next = inputs[i].nextSibling;
        next.innerHTML = inputs[i].value;
    }
}