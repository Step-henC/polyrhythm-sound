const audioCtx = new (window.AudioContext || window.webkitAudioContext)(); //windows or safari


function playSound(frequency = 440, duration=2) {
  const osc = audioCtx.createOscillator(); //generate sound
  const envelope = audioCtx.createGain(); //start at zero, increase, then go down on close
  osc.connect(envelope)
  osc.connect(audioCtx.destination); //connect to speakers

  envelope.gain.setValueAtTime(0, audioCtx.currentTime);
  envelope.gain.linearRampToValueAtTime(0.05, audioCtx.currentTime + 0.05); //init w/ low value so as not to exceed max vol
  envelope.gain.linearRampToValueAtTime(0, audioCtx.currentTime + duration);



  osc.frequency.setValueAtTime(frequency, audioCtx.currentTime);

  osc.start();
  osc.stop(audioCtx.currentTime + duration);
}