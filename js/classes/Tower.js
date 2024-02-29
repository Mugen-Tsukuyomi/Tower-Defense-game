import { c, projectiles, canvas } from '../index.js'
import { Enemy } from './Enemy.js'
import { Projectile } from './Projectile.js'
import { Sprite } from './Sprite.js'
export class Tower extends Sprite {
  constructor({ position }) {
    super({
      position,
      imgSrc: 'imgs/tower.png',
      frames: { max: 19, hold: 3 },
      offset: { x: 0, y: -80 }
    })
    this.width = 128
    this.height = 64
    this.range = 250
    this.center = {
      x: this.position.x + this.width / 2,
      y: this.position.y + this.height / 2
    }
    this.currentTarget = null
  }

  draw() {
    super.draw()
    // c.fillStyle = 'rgba(2,2,255,0.1)'
    // c.beginPath()
    // c.arc(this.center.x, this.center.y, this.range, 0, Math.PI * 2)
    // c.fill()
    // c.stroke()
  }

  getProjectile() {
    if (!this.currentTarget) return
    let index = projectiles.length != 0 ? projectiles.length : 0
    projectiles.push(
      new Projectile({
        position: {
          x: this.center.x - 20,
          y: this.center.y - 110
        },
        target: this.currentTarget,
        index
      })
    )
  }

  update() {
    this.draw()
    for (let i = 0; i < Enemy.enemies.length; i++) {
      const enemy = Enemy.enemies[i]
      let x, y
      if (this.center.x < enemy.position.x) x = enemy.position.x
      else if (this.center.x > enemy.position.x + enemy.width) {
        x = enemy.position.x + enemy.width
      } else x = this.center.x

      if (this.center.y < enemy.position.y) y = enemy.position.y
      else if (this.center.y > enemy.position.y + enemy.height) {
        y = enemy.position.y + enemy.height
      } else y = this.center.y

      const dx = this.center.x - x
      const dy = this.center.y - y
      const distance = Math.sqrt(dx * dx + dy * dy)
      if (distance - this.range <= 0) {
        this.currentTarget = enemy
        break
      } else this.currentTarget = null
    }
    if (
      this.currentTarget ||
      (!this.currentTarget && this.frames.current != 0)
    ) {
      super.update()
    }
    if (
      this.frames.elapsed % this.frames.hold === 0 &&
      this.currentTarget &&
      this.frames.current == 6
    ) {
      if (this.currentTarget.health <= 0) this.currentTarget = null
      this.getProjectile()
    }
  }
}
