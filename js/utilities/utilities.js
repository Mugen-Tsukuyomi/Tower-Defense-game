import { PlacementTile } from '../classes/PlacementTile.js'

export const arrayProto = (function () {
  Array.prototype.parse2D = function () {
    const array2D = []
    for (let i = 0; i < this.length; i += 20) {
      array2D.push(this.slice(i, i + 20))
    }
    return array2D
  }

  Array.prototype.createObjectsFrom2D = function () {
    const objects = []
    this.forEach((row, y) => {
      row.forEach((Symbol, x) => {
        if (Symbol == 14) {
          objects.push(
            new PlacementTile({
              position: {
                x: x * 64,
                y: y * 64
              }
            })
          )
        }
      })
    })
    return objects
  }
})()
