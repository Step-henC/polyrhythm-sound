class Ball {
  constructor(track, radius, speed, soundFrequency) {
    this.track = track;
    this.radius = radius;
    this.speed = speed;
    this.soundFrequency = soundFrequency
    this.offset = 0;
    this.center = this.track.getPosition(this.offset);
    this.round = 0;
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
    ctx.strokeStyle = "white";
    ctx.stroke();
  }

  move() {
    this.offset += this.speed;
    const res = this.track.getPosition(this.offset);
    this.center = {x: res.x, y:res.y};
    if (res.round != this.round) {
      playSound(this.soundFrequency);
      this.round = res.round;
    }
  }
}