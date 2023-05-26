var image = document.querySelector('#rony');
const audio = new Audio();
audio.src = 'a30.mp3'
image.onclick = function() {
    image.src = 'rony2.jpg';
    audio.play();
};

