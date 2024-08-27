function checkPassword() {
    var haslo = "Jestemciekawa746"; // Ustaw swoje hasło tutaj
    var wpisaneHaslo = document.getElementById("password").value;
    
    if (wpisaneHaslo === haslo) {
        window.location.href = "strona.html"; // Przekierowanie na stronę po wpisaniu poprawnego hasła
    } else {
        document.getElementById("error-message").style.display = "block"; // Pokaż komunikat o błędnym haśle
    }
}
