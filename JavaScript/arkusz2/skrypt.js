
function toggleQuotes(clickedId) {
    const quote1 = document.getElementById('osoba1');
    const quote2 = document.getElementById('osoba2');
    const quote3 = document.getElementById('osoba3');

    if (clickedId === 'osoba1') {
        quote1.style.display = 'none';  // Ukryj pierwszy cytat
        quote2.style.display = 'block'; // Pokaż drugi cytat
    } else if (clickedId === 'osoba2') {
        quote2.style.display = 'none';  // Ukryj drugi cytat
        quote3.style.display = 'block'; // Pokaż trzeci cytat
    } else if (clickedId === 'osoba3') {
        quote3.style.display = 'none';  // Ukryj trzeci cytat
        quote1.style.display = 'block'; // Pokaż pierwszy cytat
    }
}


document.getElementById('osoba1').addEventListener('click', function () {
    toggleQuotes('osoba1');
});
document.getElementById('osoba2').addEventListener('click', function () {
    toggleQuotes('osoba2');
});
document.getElementById('osoba3').addEventListener('click', function () {
    toggleQuotes('osoba3');
});

