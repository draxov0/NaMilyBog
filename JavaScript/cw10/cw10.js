document.querySelector('#count').onclick = function(){
    
    let dystans = parseInt(document.querySelector("#dystans").value);//pobranie wartości z pola money
    let fuel = parseFloat(document.querySelector("#fuel").value);//pobranie wartości z pola rate
    let burn = parseInt(document.querySelector("#burn").value);//pobranie wartości z pola 
    console.log(`obliczanie...${dystans} ${fuel} ${burn}`); 
    let result = (dystans / 100) * fuel * burn;        
    console.log(`wynik: ${result}`);  //wyświetlenie wyniku w konsoli
    document.querySelector("#result").innerHTML = result.toFixed(2);
};