// CONTADOR
const targetDate = new Date("2024-06-29T07:00:00").getTime();
const countdownDisplay = document.getElementById("countdown");

const countdown = setInterval(() => {
    const distance = targetDate - new Date().getTime();

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownDisplay.innerText = `${days}d ${
        hours >= 10 ? hours : "0" + hours
    }h:${minutes >= 10 ? minutes : "0" + minutes}m:${
        seconds >= 10 ? seconds : "0" + seconds
    }s`;

    if (distance < 0) {
        clearInterval(countdown);
        countdownDisplay.innerText = "¡Ya ha llegado!";
    }
}, 1000);

// REPRODUCTOR
const audio = document.getElementById("audio");
const playButton = document.getElementById("play");
let isPlaying = false;

playButton.addEventListener("click", () => {
    if (isPlaying) {
        audio.pause();
        isPlaying = false;
    } else {
        audio.play();
        isPlaying = true;
    }
});


