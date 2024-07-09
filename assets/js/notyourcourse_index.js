window.onload = function() {
    notYourCourse();
  }
/*<------------------------------------------------->
<!--	notYourCourse	-->
<!-------------------------------------------------->
* Descripción:
    Si el curso que escogió el usuario tiene la clase notYourCourse, al hacer click saldrá un toast de materialize que indica que no es el curso que te corresponde. Además se crea una animación de animate.css. 
* Parámetros:
    - ninguno
* Dependencias: triggerToast()
* Devuelve/resultado:
Cuando el botón es apretado llama a la función triggerToast()
<!------------------------------------------------->*/
function notYourCourse(){
    const notYourCourseCollection = document.querySelectorAll('.notYourCourse');

    notYourCourseCollection.forEach(function callback(element){
        element.addEventListener('click', triggerToast, false);
    });
}
/*<!------------------------------------------------->
<!--	end notYourCourse	-->
<!------------------------------------------------->*/

/*<------------------------------------------------->
<!--	triggerToast	-->
<!-------------------------------------------------->
* Descripción:
    Se puede emplear en un event listener pues este pasa como parámetro "this" el elemento de donde se ha ejecutado. Despliega un toast de materialize y crea una animación de animate.css
* Parámetros: materialize.css, animate.css
    -this: proviene del callback del EventListener.
* Dependencias:
* Devuelve/resultado: Elemento gráfico que le indica al usuaro que está trarando de acceder a un curso que no le corresponde y el botón vibra 
<!------------------------------------------------->*/
function triggerToast(){
    /*<--	*** toast ***	-->*/
    var toastHTML = '<i class="fa-duotone fa-lock-keyhole" style="font-size:2rem; color:black; margin-right:1rem;"></i><span> El curso al que intentas acceder no te corresponde. Si crees que es un error comunícalo a tu profesor.</span>';
    M.toast({html: toastHTML});
    /*<--	*** end toast ***	-->*/
    
    /*<--	*** animación del botón ***	-->*/
    this.classList.remove('animate__animated','animate__flipInX');
    this.classList.add('animate__animated','animate__shakeX');
    this.addEventListener('animationend', () => {
        this.classList.remove('animate__animated','animate__shakeX'); 
      });
    /*<--	*** end animación ***	-->*/

}
/*<!------------------------------------------------->
<!--	end triggerToast	-->
<!------------------------------------------------->*/



/*<------------------------------------------------->
<!--****************   animations   **************-->
<!------------------------------------------------->*/






