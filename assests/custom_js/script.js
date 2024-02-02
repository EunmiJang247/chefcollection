
var myBody = document.getElementsByTagName('body')[0]
function fixNav(){
    if ($(this).scrollTop() > 0) {
        $(myBody).addClass('nav-active')
    }else{
        $(myBody).removeClass('nav-active')
    }
}
$(window).scroll(fixNav);
$(document).ready(fixNav);

document.addEventListener("DOMContentLoaded", function() {
  // Find the form element by its ID
  var form = document.getElementById("form"); // Replace "yourFormId" with the actual ID of your form

  // Add a submit event listener to the form
  form.addEventListener("submit", function(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Log "hi" to the console
    console.log("hi");
  });
});


AOS.init({
    duration:1000,
});
