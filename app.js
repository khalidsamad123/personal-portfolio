function sendMail() {
  let params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("comment").value,
  };

  emailjs.send("service_a3uh208", "template_ws72ycb", params)
    .then(function(response) {
      console.log("Email sent successfully:", response);
      swal("Good job!", "Your email has been sent!", "success");
    }, function(error) {
      console.error("Email sending failed:", error);
      swal("Failed to send email. Please try again later", "error");
    });
}



