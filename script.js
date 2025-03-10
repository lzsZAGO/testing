function moveButton() {
    var button2 = document.getElementById('button2');
    var maxX = window.innerWidth - button2.offsetWidth;
    var maxY = window.innerHeight - button2.offsetHeight;

    var randomX = Math.floor(Math.random() * maxX);
    var randomY = Math.floor(Math.random() * maxY);

    button2.style.left = randomX + 'px';
    button2.style.top = randomY + 'px';
}
