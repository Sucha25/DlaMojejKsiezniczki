
// Funkcja do zaznaczenia serduszka
let selectedHearts = 0;

function selectHeart(id) {
    const heartButton = document.getElementById(`heart-${id}`);
    
    if (!heartButton.classList.contains('selected')) {
        heartButton.classList.add('selected');
        selectedHearts++;
    }
    
    if (selectedHearts === 3) {
        document.getElementById('love-message').style.display = 'block';
    }
}


// Funkcja do odliczania czasu
function updateCountdown() {
    const eventDate = new Date('2025-01-19T00:00:00').getTime();
    const now = new Date().getTime();
    const distance = eventDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('timer').innerHTML = `${days} dni ${hours} godzin ${minutes} minut ${seconds} sekund`;

    if (distance < 0) {
        document.getElementById('timer').innerHTML = "Pierwszy rooook!";
    }
}

setInterval(updateCountdown, 1000);
