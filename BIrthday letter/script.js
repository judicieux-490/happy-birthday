// script.js
// Anggap ada tombol dengan id="reveal-button" di HTML

const revealButton = document.getElementById('reveal-button');
const secretMessage = document.getElementById('secret-message');

revealButton.addEventListener('click', function() {
    if (secretMessage.style.display === 'none') {
        secretMessage.style.display = 'block';
        revealButton.textContent = 'Sembunyikan Lagi';
    } else {
        secretMessage.style.display = 'none';
        revealButton.textContent = 'Klik untuk Kejutan';
    }
});