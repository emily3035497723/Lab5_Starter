window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById('horn-select');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const playButton = document.querySelector('button');
  const audioElement = document.querySelector('audio');
  const imageElement = document.querySelector('#expose img');
  const confetti = new JSConfetti();

  const hornSounds = {
    'air-horn': './assets/audio/air-horn.mp3',
    'car-horn': './assets/audio/car-horn.mp3',
    'party-horn': './assets/audio/party-horn.mp3'
  };

  const hornImages = {
    'air-horn': './assets/images/air-horn.svg',
    'car-horn': './assets/images/car-horn.svg',
    'party-horn': './assets/images/party-horn.svg'
  };

  // update the audio source and image based on the selected horn
  hornSelect.addEventListener('change', () => {
    const selectedHorn = hornSelect.value;
    if (hornSounds[selectedHorn]) {
      audioElement.src = hornSounds[selectedHorn];
      imageElement.src = hornImages[selectedHorn];
    }
  });

  // adjust volume with slider
  volumeSlider.addEventListener('input', () => {
    const volume = volumeSlider.value / 100;
    audioElement.volume = volume;
    
    // update volume icon based on volume level
    if (volume === 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
    } else if (volume <= 0.33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
    } else if (volume <= 0.66) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
    } else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
    }
  });

  // play the selected sound when the button is clicked
  playButton.addEventListener('click', () => {
    if (audioElement.src) {
      audioElement.play();
    }

    // if Party Horn is selected, show confetti
    if (hornSelect.value === 'party-horn') {
      confetti.addConfetti();
    }
  });
}
