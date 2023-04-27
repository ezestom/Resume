 // cambiar a modo oscuro
 window.addEventListener('load', function() {

   function toggleClass() {
      const myBody = document.querySelector("body");
      myBody.classList.toggle("active");
      myBody.classList.toggle("desactive");
    }
    
    const myButton = document.getElementById("checkbox");
    myButton.addEventListener("click", toggleClass);
    
})