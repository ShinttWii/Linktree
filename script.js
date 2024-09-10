const audio = document.getElementById('Linktree-main');

    function playAudio() {
        audio.play();
    }

    function pauseAudio() {
        audio.pause();
    }

    function stopMusic() {
        audio.pause();
        audio.currentTime = 0;
    }