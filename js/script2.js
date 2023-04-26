 // activar background
window.addEventListener('load', function() {


   
   function toggleClass() {
      const myBody = document.querySelector("body");
      myBody.classList.toggle("active");
      myBody.classList.toggle("desactive");
    }
    
    var myButton = document.getElementById("checkbox");
    myButton.addEventListener("click", toggleClass);
    
})