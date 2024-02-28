'use strict'
import { placementTilesData } from './data/placementTilesData.js'
import { arrayProto } from './utilities/utilities.js'
import { Enemy } from './classes/Enemy.js'
import { Tower } from './classes/Tower.js'

export const canvas = document.querySelector('canvas')
export const c = canvas.getContext('2d')

canvas.width = 1280
canvas.height = 768

const backGround = new Image()
backGround.src = 'imgs/gameMap.png'

export const mouse = {
  x: undefined,
  y: undefined
}

const placementTiles = placementTilesData.parse2D().createObjectsFrom2D()

let activeTile

const towers = []
export const projectiles = []
export const explosions = []
Enemy.spawnEnemies()

let heart = 10
export let coins = 100

function animate() {
  const animationId = requestAnimationFrame(animate)
  c.drawImage(backGround, 0, 0)
  for (let i = Enemy.enemies.length - 1; i >= 0; i--) {
    const enemy = Enemy.enemies[i]
    enemy.update()
    if (enemy.position.x > canvas.width) {
      Enemy.enemies.splice(i, 1)
      heart--
      document.getElementById('heart').innerHTML = heart
      if (heart == 0) {
        cancelAnimationFrame(animationId)
        document.getElementById('gameOver').style.display = 'flex'
      }
    }
    if (enemy.health <= 0) {
      Enemy.enemies.splice(i, 1)
      coins += 25
      document.getElementById('coins').innerHTML = coins
    }
  }
  if (Enemy.enemies.length == 0) {
    Enemy.enemiesNum += 2
    Enemy.spawnEnemies()
  }
  placementTiles.forEach((tile) => tile.update())
  towers.sort((a, b) => a.position.y - b.position.y)
  towers.forEach((tower) => tower.update())
  for (let i = projectiles.length - 1; i >= 0; i--) {
    if (projectiles[i]) projectiles[i].update()
  }
  for (let i = explosions.length - 1; i >= 0; i--) {
    explosions[i].draw()
    explosions[i].update()
    if (explosions[i].frames.current == 3) explosions.splice(i, 1)
  }
}

animate()

canvas.addEventListener('mousemove', (e) => {
  mouse.x = e.pageX
  mouse.y = e.pageY
  activeTile = null
  for (let i = 0; i < placementTiles.length; i++) {
    const tile = placementTiles[i]
    if (
      mouse.x > tile.position.x &&
      mouse.x < tile.position.x + tile.size &&
      mouse.y > tile.position.y &&
      mouse.y < tile.position.y + tile.size
    ) {
      activeTile = tile
      break
    }
  }
})

canvas.addEventListener('click', () => {
  if (activeTile && activeTile.empty) {
    if (coins >= 50) {
      coins -= 50
      document.getElementById('coins').innerHTML = coins
      towers.push(
        new Tower({
          position: {
            x: activeTile.position.x,
            y: activeTile.position.y
          }
        })
      )
      activeTile.empty = false
    }
  }
})
