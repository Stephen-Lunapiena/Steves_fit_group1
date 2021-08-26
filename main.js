const form = document.getElementById('nutrition_form')
const dataDiv = document.querySelector("#resultsList")


function display_stuff(obj, container) {

    var newLi = document.createElement("li") //creating elements
    newLi.setAttribute("class", "newLi") //setting class to element just created

    newLi.appendChild(document.createTextNode(`${obj.label}: ${obj.quantity} ${obj.unit}s`)) //adds text to "li". Taking object properties that I need from data
    container.appendChild(newLi) 
    dataDiv.appendChild(container)
  }

form.addEventListener('submit', (event) => {
  event.preventDefault()

  var food_ingredient = document.querySelector('#food_ingredient').value
  
  fetch(`https://api.edamam.com/api/nutrition-data?app_id=a5be03de&app_key=fc3f3e2c95599671a870ac7e93f0059a&nutrition-type=logging&ingr=${food_ingredient}`)

  .then(response => response.json())
  .then(data => {
    
    var findOldUl = document.querySelector("#dataUl")

    if(findOldUl !== null) findOldUl.remove() //if an old ul is found, pressing send button removes it, if not...

    var newUl = document.createElement("ul") //creates a new ul
    newUl.setAttribute("id", "dataUl")
  
    const nutrients = data.totalNutrientsKCal

    display_stuff(nutrients.ENERC_KCAL, newUl) //new ul is being sent to displaystuff() as an argument to keep it in scope
    display_stuff(nutrients.PROCNT_KCAL, newUl)
    display_stuff(nutrients.FAT_KCAL, newUl)
    display_stuff(nutrients.CHOCDF_KCAL, newUl)

  })
  .catch(error => console.log(error))

  })