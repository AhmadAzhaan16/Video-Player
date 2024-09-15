const symbolPlay = '⯈';
const symbolPause = '❚ ❚';
const files = ['Nature-8399','River-655','Waterfall-941','Wave-2737'];

document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('vidPlayer');
    const playButton = document.getElementById('play');
    const stopButton = document.getElementById('stop');

    
    function togglePlayPause() {
        if (video.paused || video.ended) {
            video.play();
            playButton.textContent = '❚❚'; 
        } else {
            video.pause();
            playButton.textContent = '⯈'; 
        }
    }
    
  
    playButton.addEventListener('click', togglePlayPause);

    
    stopButton.addEventListener('click', function() {
        video.pause();
        video.currentTime = 0; 
        playButton.textContent = '⯈'; 
    });

    
    document.querySelectorAll('[data-skip]').forEach(button => {
        button.addEventListener('click', function() {
            video.currentTime += parseFloat(this.dataset.skip);
        });
    });

    
    const volumeControl = document.getElementById('volume');
    volumeControl.addEventListener('input', function() {
        video.volume = this.value;
    });

    document.querySelectorAll('.video-thumb').forEach(preview => {
        preview.addEventListener('click', function() {
            const videoSrc = this.getAttribute('data-video-src');
            video.src = videoSrc;
            video.play();
            playButton.textContent = symbolPause;
        });
    });

});

