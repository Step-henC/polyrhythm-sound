class Track {
  constructor(center, radius) {
    this.center = center;
    this.radius = radius;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.center.x, this.center.y, this.radius, 0, Math.PI * 2);
      // instead of arc method, you could manually draw circle using equation
    // for (let a = 0; a <Math.PI *2; a += 0.4) { //adjust increment value to make lines wavy or straigher (lower)
    //   ctx.lineTo(
    //     this.center.x + Math.cos(a) * this.radius,
    //     this.center.y - Math.sin(a) * this.radius
    //   );
    // }
    //ctx.closePath() // need this line or circle will have opening

    //the code above duplicates getPosition, so refactor to use getPosition instead
      // for (let a = 0; a <Math.PI *2; a += 0.4) { //adjust increment value to make lines wavy or straigher (lower)
    //    const pos = this.getPosition(a);
    //    ctx.lineTo(pos.x, pos.y );
    // }
    ctx.strokeStyle = "white";
    ctx.stroke();
  }

  getPosition(offset){
      return {
        x: this.center.x + Math.cos(offset) * this.radius,
        y: this.center.y - Math.sin(offset) * this.radius,
      }
  }
}