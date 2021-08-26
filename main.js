const form = document.getElementById('nutrition_form')
const dataUl = document.querySelector("#resultsList")

function display_stuff(obj) {
  console.log(obj)
    var newLi = document.createElement("li")
    newLi.appendChild(document.createTextNode(`${obj.label}: ${obj.quantity} ${obj.unit}s`))
    dataUl.appendChild(newLi)
  }

form.addEventListener('submit', (event) => {
  event.preventDefault()

  var food_ingredient = document.querySelector('#food_ingredient').value
  console.log(food_ingredient);


  fetch(`https://api.edamam.com/api/nutrition-data?app_id=a5be03de&app_key=fc3f3e2c95599671a870ac7e93f0059a&nutrition-type=logging&ingr=${food_ingredient}`)

  .then(response => response.json())
  .then(data => {  
    
    const nutrients = data.totalNutrientsKCal

    display_stuff(nutrients.ENERC_KCAL)
    display_stuff(nutrients.PROCNT_KCAL)
    display_stuff(nutrients.FAT_KCAL)
    display_stuff(nutrients.CHOCDF_KCAL)
    
  })
  .catch(error => console.log(error))

  })











  