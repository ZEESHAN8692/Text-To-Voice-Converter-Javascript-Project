const inputField = document.getElementById("inputField");
let selectVoice = document.getElementById("select");
const button = document.getElementById("btn");
let Utterance = new SpeechSynthesisUtterance();
let voices = [];

window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  Utterance.voice = voices[0];
  voices.forEach(
    (voice, i) => (selectVoice.options[i] = new Option(voice.name, i))
  );
};

selectVoice.addEventListener("change", () => {
  Utterance.voice = voices[selectVoice.value];
});
button.addEventListener("click", () => {
  Utterance.text = inputField.value;
  window.speechSynthesis.speak(Utterance);
});
