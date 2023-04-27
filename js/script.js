// Esperar a que se cargue la página completamente
window.addEventListener('load', function() {
   // Esperar 7 segundos y luego cambiar a la segunda vista
 

   setTimeout(function() {
     window.location.href = 'index2.html';
   }, 7000); //7 segundos
 });