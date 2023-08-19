let fs = require("fs")
let hotToy = fs.readFileSync("./datos/figuras1.json", "utf-8")
let bandai = fs.readFileSync("./datos/figuras2.json", "utf-8")
let starWars = fs.readFileSync("./datos/figuras3.json", "utf-8")

function importar (hotToy, bandai, starWars) {
   let hotToyArray = JSON.parse (hotToy)
   let bandaiArray = JSON.parse (bandai)
   let starWarsArray = JSON.parse (starWars)
   return [hotToyArray, bandaiArray, starWarsArray]
}


let coleccion = importar(hotToy, bandai, starWars)
console.log(coleccion)

module.exports = coleccion
