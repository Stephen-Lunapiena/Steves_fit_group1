const form = document.getElementById('nutrition_form')
// const complaintsList = document.querySelector("#food_ingredient")
// const resButton = document.querySelector("#showRes")

// function convert(obj) {
//     return Object.keys(obj).map(key => ({
//         name: key,
//         value: obj[key],
//         type: "foo"
//     }));
// }

function display_stuff(obj) {
    var text = '';
    for (const [key, value] of Object.entries(obj)) {
      console.log(`${value}`);
      text += `${value}`;
    
    }
    return text
  }

form.addEventListener('submit', (event) => {
  event.preventDefault()

  var food_ingredient = document.querySelector('#food_ingredient').value
  console.log(food_ingredient);


  fetch(`https://api.edamam.com/api/nutrition-data?app_id=a5be03de&app_key=fc3f3e2c95599671a870ac7e93f0059a&nutrition-type=logging&ingr=${food_ingredient}`)

  .then(response => response.json())
  .then(data => {  
    console.log(data)
    var nutritionData = data 
    var totalNutrientsKCal = nutritionData.totalNutrientsKCal;

    display_stuff(totalNutrientsKCal.ENERC_KCAL);
    display_stuff(totalNutrientsKCal.PROCNT_KCAL)
    display_stuff(totalNutrientsKCal.FAT_KCAL)
    display_stuff(totalNutrientsKCal.CHOCDF_KCAL);
    var macros = document.querySelector("#macros")
    macros.innerHTML += food_ingredient + "<br>"
    macros.innerHTML += display_stuff(totalNutrientsKCal.ENERC_KCAL) + "<br>"
    macros.innerHTML += display_stuff(totalNutrientsKCal.PROCNT_KCAL) + "<br>"
    macros.innerHTML += display_stuff(totalNutrientsKCal.FAT_KCAL) + "<br>"
    macros.innerHTML += display_stuff(totalNutrientsKCal.CHOCDF_KCAL) + "<br>"




  })
  .catch(error => console.log(error))

  })









