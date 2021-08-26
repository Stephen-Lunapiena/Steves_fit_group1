var x = document.querySelector("#emailform")
  x.addEventListener("submit", submitForm)


  function submitForm(e) {
      e.preventDefault()
      let name = document.querySelector("#name").value; //these are the individual values from my form. Declared as variables to use later on
      let email = document.querySelector("#email").value;
      let subject = document.querySelector("#subject").value;
      let msg = document.querySelector("#msg").value;
      sendEmail(name, subject, email, msg)
      console.log(email)

  //smtp function template
  function sendEmail(name, subject, email, msg) {
      Email.send({
          Host: "smtp.gmail.com",
          Username : "projectest120@gmail.com", 
          Password : "randompw",
          To : 'projectest120@gmail.com',
          From : "Stephen.lunapiena@gmail.com",
          Subject : name + " has sent you a message",
          Body : `Name: ${name} \rEmail: ${email} \rFitness goals: ${subject}\rMessage: ${msg}`
      }).then(
         alert("your form has been submitted")
      )};
  }


      