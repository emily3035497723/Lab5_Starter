window.addEventListener("DOMContentLoaded", init);

function init() {
  const voiceSelect = document.getElementById("voice-select");
  const textInput = document.getElementById("text-to-speak");
  const speakButton = document.querySelector("section#explore button");
  const faceImg = document.querySelector("section#explore img");

  speechSynthesis.onvoiceschanged = populateVoices;
  populateVoices();

  function populateVoices() {
    const voices = speechSynthesis.getVoices();
    const voiceSelect = document.getElementById("voice-select");
    voiceSelect.innerHTML = "";
    console.log("Voices loaded:", voices);
  
    voices.forEach(voice => {
      const option = document.createElement("option");
      option.textContent = `${voice.name} (${voice.lang})`;
      option.value = voice.name;
      voiceSelect.appendChild(option);
    });
  }

  speakButton.addEventListener("click", () => {
    const utterance = new SpeechSynthesisUtterance(textInput.value);
    const selectedVoiceName = voiceSelect.value;
    const voices = speechSynthesis.getVoices();
    const selectedVoice = voices.find(voice => voice.name === selectedVoiceName);
    utterance.voice = selectedVoice;

    faceImg.src = "assets/images/smiling-open.png";
    utterance.onend = () => {
      faceImg.src = "assets/images/smiling.png";
    };

    speechSynthesis.speak(utterance);
  });
}