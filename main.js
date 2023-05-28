var image = document.querySelector('#rony');
var boom = document.querySelector('.hide')
const audio = new Audio();
audio.src = 'a30.mp3'

image.onclick = function() {
    image.src = 'rony2.jpg';
    audio.play();
    boom.style.display = 'block'
};

