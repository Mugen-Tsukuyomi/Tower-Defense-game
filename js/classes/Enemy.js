import { wayPoints } from '../data/wayPoints.js'
import { c } from '../index.js'
import { Sprite } from './Sprite.js'
export class Enemy extends Sprite {
  constructor({ position }) {
    super({
      position,
      imgSrc: 'imgs/orc.png',
      frames: { max: 7, hold: 4}
    })
    this.width = 106
    this.height = 79
    this.currentWayPoint = 0
    this.health = 100
    this.velocity = {
      x: 0,
      y: 0
    }
    this.speed = 2
  }

  static enemiesNum = 2
  static enemies = []
  static spawnEnemies() {
    for (let i = 0; i < this.enemiesNum; i++) {
      this.enemies.push(
        new Enemy({
          position: {
            x: wayPoints[0].x - 50 - i * 150,
            y: wayPoints[0].y - 50
          }
        })
      )
    }
  }

  draw() {
    super.draw()
    // health bar
    c.fillStyle = 'red'
    c.fillRect(this.position.x, this.position.y - 15, this.width, 10)
    c.fillStyle = 'green'
    c.fillRect(
      this.position.x,
      this.position.y - 15,
      (this.width * this.health) / 100,
      10
    )
  }

  update() {
    this.draw()
    super.update()
    const wayPoint = wayPoints[this.currentWayPoint]
    const distanceX = wayPoint.x - (this.position.x + this.width / 2)
    const distanceY = wayPoint.y - (this.position.y + this.height / 2)
    const angle = Math.atan2(distanceY, distanceX)
    this.velocity.x = Math.cos(angle) * this.speed
    this.velocity.y = Math.sin(angle) * this.speed
    this.position.x += this.velocity.x
    this.position.y += this.velocity.y
    if (
      Math.abs(
        Math.round(this.position.x + this.width / 2) - Math.round(wayPoint.x)
      ) < Math.abs(this.velocity.x) &&
      Math.abs(
        Math.round(this.position.y + this.height / 2) - Math.round(wayPoint.y)
      ) < Math.abs(this.velocity.y) &&
      this.currentWayPoint < wayPoints.length - 1
    ) {
      this.currentWayPoint++
    }
  }
}
