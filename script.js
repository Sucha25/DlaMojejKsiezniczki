// Zmienna do śledzenia zaznaczenia serduszek
let selectedHearts = new Set();

// Funkcja do zaznaczenia serduszka
function selectHeart(id) {
    const heartButton = document.getElementById(`heart-${id}`);
    
    // Dodanie klasy do zaznaczenia serduszka
    if (!heartButton.classList.contains('selected')) {
        heartButton.classList.add('selected');
        selectedHearts.add(id); // Dodanie ID zaznaczonego serduszka do zbioru
    }

    // Sprawdzenie, czy wszystkie trzy serduszka zostały zaznaczone
    if (selectedHearts.size === 3) {
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
        document.getElementById('timer').innerHTML = "Pierwszy roczek!";
    }
}

// Ustawienie interwału do aktualizacji odliczania co sekundę
setInterval(updateCountdown, 1000);
