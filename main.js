const form = document.getElementById('nutrition_form')

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

    var enerc = display_stuff(totalNutrientsKCal.ENERC_KCAL);
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









  var x = document.querySelector("#emailform")
  x.addEventListener("submit", submitForm)


  function submitForm(e) {
      e.preventDefault()
      let name = document.querySelector("#name").value;
      let email = document.querySelector("#email").value;
      let subject = document.querySelector("#subject").value;
      let msg = document.querySelector("#msg").value;
      sendEmail(name, subject, email, msg)
      console.log(email)
  
  function sendEmail(name, subject, email, msg) {
      Email.send({
          Host: "smtp.gmail.com",
          Username : "projectest120@gmail.com",
          Password : "randompw",
          To : 'projectest120@gmail.com',
          From : "Stephen.lunapiena@gmail.com",
          Subject : name+" has sent you a message",
          Body : "Name:"+name+"Phone Number:"+email+"E-Mail"+subject+"Message:"+msg
      }).then(
        m => alert(m)
      )};
  }



