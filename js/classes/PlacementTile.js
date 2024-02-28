import { c, mouse } from '../index.js'
export class PlacementTile {
  constructor({ position }) {
    this.position = position
    this.size = 64
    this.color = 'rgba(255,255,255, 0.2)'
    this.empty = true
  }

  draw() {
    c.fillStyle = this.color
    c.fillRect(this.position.x, this.position.y, this.size, this.size)
  }

  update() {
    this.draw()
    if (
      mouse.x > this.position.x &&
      mouse.x < this.position.x + this.size &&
      mouse.y > this.position.y &&
      mouse.y < this.position.y + this.size &&
      this.empty
    ) {
      this.color = 'rgba(0,255,0,0.5)'
    } else this.color = 'rgba(255,255,255, 0.2)'
    if (!this.empty) this.color = 'rgba(255,255,255, 0)'
  }
}
