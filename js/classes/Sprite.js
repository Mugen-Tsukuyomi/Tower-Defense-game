import { c } from '../index.js'
export class Sprite {
  constructor({
    position,
    imgSrc,
    frames = { max: 1, hold: 4 },
    offset = { x: 0, y: 0 }
  }) {
    this.position = position
    this.img = new Image()
    this.img.src = imgSrc
    this.frames = {
      max: frames.max,
      current: 0,
      elapsed: 0,
      hold: frames.hold
    }
    this.offset = offset
  }

  draw() {
    const cropWidth = this.img.width / this.frames.max
    const crop = {
      position: {
        x: cropWidth * this.frames.current,
        y: 0
      },
      width: cropWidth,
      height: this.img.height
    }
    c.drawImage(
      this.img,
      crop.position.x,
      crop.position.y,
      crop.width,
      crop.height,
      this.position.x + this.offset.x,
      this.position.y + this.offset.y,
      crop.width,
      crop.height
    )
  }
  update() {
    // animation
    this.frames.elapsed++
    if (this.frames.elapsed % this.frames.hold == 0) {
      this.frames.current++
      if (this.frames.current == this.frames.max) {
        this.frames.current = 0
      }
    }
  }
}
