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
          Subject : name + " has sent you a message",
          Body : `Name: ${name} \rEmail: ${email} \rFitness goals: ${subject}\rMessage: ${msg}`
      }).then(
        m => alert(m)
      )};
  }


      