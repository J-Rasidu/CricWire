button = document.getElementById("formbutton");






function validateForm() {// Validation for the submit(send) button

  var formrefresh = document.getElementById("form");
  function handleForm(event) {
    event.preventDefault();
  }

  
  function emailvalidation () {
    var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; //validation part for the email pattern
    if(document.getElementById("email").value.match(pattern)) {
      return true;
    } else {
      return false;
    }

  }

  
  var namevalidate =  document.getElementById("name").value;
  var emailvalidate = emailvalidation();
  var emailval = document.getElementById("email").value;
  var details = document.getElementById("details").value.length;

  if(namevalidate.length == 0) {
    alert("Please Enter Name");
    formrefresh.addEventListener("submit", handleForm); //validations
    return;
  }else if(emailvalidate == false | emailval == "") {
    alert("Invalid email");
    formrefresh.addEventListener("submit", handleForm);
    return;
  }else if (details < 10) {
    alert("Add more details");
    formrefresh.addEventListener("submit", handleForm);
    return;
  }else{
    form.action = "mailto:lakshancosta2@gmail.com";
  }
  

}
function validateFormcheck() { // Validation for the view query button
  var formrefresh = document.getElementById("form");
  function handleForm(event) {
    event.preventDefault();
    
  }
  function emailvalidation () {
    var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; //validation part for the email pattern
    if(document.getElementById("email").value.match(pattern)) {
      return true;
    } else {
      return false;
    }

  }
  
  var namevalidatecheck =  document.getElementById("name").value; //setting the values in the variables to display in the form
  var emailvalidatecheck = emailvalidation();
  var emailvalcheck = document.getElementById("email").value;
  var detailscheck = document.getElementById("details").value.length;


  if(namevalidatecheck.length == 0) {
    alert("Please Enter Name");
    formrefresh.addEventListener("submit", handleForm); // Stopping the form from getting refressed because submit type buttons get refreshed
    return;
  }else if(emailvalidatecheck == false | emailvalcheck == "") {
    alert("Invalid email");
    formrefresh.addEventListener("submit", handleForm);
    return;
  }else if (detailscheck < 10) {
    alert("Add more details");
    formrefresh.addEventListener("submit", handleForm);
    return;

  }else {
    submitform(); //function for the display form
    
  }
}


function submitform() {
    var n=document.getElementById('container');
  
  globalThis.name = document.getElementById("name").value;
  globalThis.email = document.getElementById("email").value;
  globalThis.subject = document.querySelector('input[name="subject"]:checked').id;
  globalThis.details = document.getElementById("details").value;


 // document.getElementById('container').innerHTML = document.getElementById("display_replacment").innerHTML;


  document.getElementById("display_name").innerHTML = globalThis.name;
  
  document.getElementById("display_email").innerHTML = globalThis.email; //using innerHTML to display in the form
  document.getElementById("display_subject").innerHTML = subject;
  document.getElementById("display_details").innerHTML = details;

  n.style.display="none";
  var b=document.getElementById('display_replacment');
  b.style.display="block";
}

function editForm() {  //hide and display when the button edit is pressed
  var n = document.getElementById("display_replacment");
  n.style.display="none";
  var b=document.getElementById('container');
  b.style.display="block";
}
