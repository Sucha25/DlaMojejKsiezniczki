
// Funkcja do zaznaczenia serduszka
function selectHeart(id) {
    console.log('Clicked heart:', id);
    const heartButton = document.getElementById(`heart-${id}`);
    heartButton.classList.add('selected');
    const selectedHearts = document.querySelectorAll('#hearts-game button.selected');
    console.log('Selected hearts:', selectedHearts.length);
    
    if (selectedHearts.length === 3) {
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
        document.getElementById('timer').innerHTML = "Minęło!";
    }
}

setInterval(updateCountdown, 1000);
