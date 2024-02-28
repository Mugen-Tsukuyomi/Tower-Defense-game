import { c, explosions } from '../index.js'
import { projectiles } from '../index.js'
import { Sprite } from './Sprite.js'

export class Projectile extends Sprite {
  constructor({ position, target, index }) {
    super({ position, imgSrc: 'imgs/projectile.png' })
    this.radius = 10
    this.velocity = {
      x: 0,
      y: 0
    }
    this.target = target
    this.index = index
    this.speed = 6.5
  }

  update() {
    this.draw()
    super.update()
    // fly
    const dy = this.target.position.y + this.target.height / 2 - this.position.y
    const dx = this.target.position.x + this.target.width / 2 - this.position.x
    const angle = Math.atan2(dy, dx)
    this.velocity.x = Math.cos(angle) * this.speed
    this.velocity.y = Math.sin(angle) * this.speed
    this.position.x += this.velocity.x
    this.position.y += this.velocity.y
    // explode
    const distance = Math.hypot(dx, dy)
    if (distance - this.radius < 25) {
      delete projectiles[this.index]
      explosions.push(
        new Sprite({
          position: {
            x: this.position.x,
            y: this.position.y
          },
          imgSrc: 'imgs/explosion.png',
          frames: {
            max: 4,
            hold: 3
          }
        })
      )
      this.target.health -= 10
    }
  }
}
