class Ball {
  constructor(track, radius, speed, soundFrequency, hue) {
    this.track = track;
    this.radius = radius;
    this.speed = speed;
    this.soundFrequency = soundFrequency
    this.offset = 0;
    this.center = this.track.getPosition(this.offset);
    this.round = 0;
    this.hue = hue;
    this.progress = 0;
  }

  move() {
    this.offset += this.speed;
    const res = this.track.getPosition(this.offset);
    this.center = {x: res.x, y:res.y};
    this.progress = res.progress;
    if (res.round != this.round) {
      playSound(this.soundFrequency);
      this.round = res.round;
    }
  }

  draw(ctx) {
    // draw ball twice at symmetrical plane for bouncing effect

    //Decommissioned due to math.abs on Math.sin on getPosition
        //to tell track we want to generate half circle and not full circle 

    // const fakeY = 2 * this.track.center.y - this.center.y;

    // if (fakeY > this.center.y) {
    // ctx.beginPath();
    // ctx.arc(this.center.x, this.center.y, this.radius, 0, Math.PI * 2);
    // ctx.strokeStyle = "white";
    // ctx.stroke();
    // } else {
    // ctx.beginPath();
    // ctx.arc(this.center.x, fakeY, this.radius, 0, Math.PI * 2);
    // ctx.strokeStyle = "white";
    // ctx.stroke();
    // }

    ctx.beginPath();
    ctx.arc(this.center.x, this.center.y, this.radius, 0, Math.PI * 2);
    ctx.lineWidth = 2;
    const lightness = 100 - 50 * this.progress; //between 50-100% 
    ctx.strokeStyle = "white";
    ctx.fillStyle = `hsl(${this.hue}, 100%, ${lightness}%)`;
    ctx.fill();
    ctx.stroke();
  }


}