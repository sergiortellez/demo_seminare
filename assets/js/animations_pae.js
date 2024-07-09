/*<--	*** on window load ***	-->*/
window.onload = function() {
    navAnimations();
    coverAnimations();
    footerAnimation();
    verbAnimation();
    resaltadoAnimacion();
    listAnimation();
    setInterval(function(){
        jumpingArrow();
    },8000);
  }
/*<--	*** end on window load ***	-->*/


/*<------------------------------------------------->
<!--	navAnimations	-->
<!-------------------------------------------------->
* Descripción:
    Añade todas las clases necesarias para animar la barra de navegación al cargar la página.
* Parámetros:
    -ninguno
* Dependencias: animate.css
* Devuelve/resultado: Anima la barra de navegación a la carga del documento
<!------------------------------------------------->*/
function navAnimations(){ 
     /*<--	*** navbar ***	-->*/
        const nav = document.querySelector('nav');
        //la nav está oculta desde el CSS, muéstrala.
        nav.style.opacity = 1;

    // nav.classList.add('animate__animated','animate__bounceInDown');
    // /*<--	*** end navbar  ***	-->*/

    /*<--	*** logo ***	-->*/
    const logo = document.querySelector('.logo-nav-container');

    //logo.classList.add('animate__delay-2s');
    //logo.style.setProperty('--animate-delay', '0.3s');
    logo.classList.add('animate__animated','animate__bounceInLeft');
    /*<--	*** end logo ***	-->*/
    
    /*<--	*** menu ***	-->*/
    const menu = document.querySelector('nav>ul');

   // menu.classList.add('animate__delay-2s');
   // menu.style.setProperty('--animate-delay', '0.3s');
    menu.classList.add('animate__animated','animate__bounceInDown');
    /*<--	*** end menu ***	-->*/

     /*<--	*** user ***	-->*/
     const user = document.querySelector('nav>div');
 
     //user.classList.add('animate__delay-2s');
     //user.style.setProperty('--animate-delay', '0.3s');
     user.classList.add('animate__animated','animate__bounceInRight');
     /*<--	*** end user ***	-->*/   
}
/*<!------------------------------------------------->
<!--	end navAnimations	-->
<!------------------------------------------------->*/

/*<------------------------------------------------->
<!--	coverAnimations	-->
<!-------------------------------------------------->
* Descripción:
    Añade todas las clases necesarias para animar la portada de la portada.
* Parámetros:
    -ninguno
* Dependencias: animate.css
* Devuelve/resultado: Anima la portada a la carga del documento
<!------------------------------------------------->*/
function coverAnimations(){
    /*<--	*** header (títulos) ***	-->*/
    const header = document.querySelector('.cover header');
    //oculto desde el CSS; muéstralo.
    header.style.opacity = 1;
    header.classList.add('animate__delay-2s');
    header.style.setProperty('--animate-delay', '0.3s');
    header.classList.add('animate__animated','animate__bounceInDown');
    /*<--	*** end header (títulos) ***	-->*/
    /*<--	*** topics ***	-->*/
    const topics = document.querySelector('#temas');
     //oculto desde el CSS; muéstralo.
     topics.style.opacity = 1;
    topics.classList.add('animate__delay-2s');
    topics.style.setProperty('--animate-delay', '0.3s');
    topics.classList.add('animate__animated','animate__flipInX');
    /*<--	*** end topics ***	-->*/
    /*<--	*** objetivo ***	-->*/
    const objetivo = document.querySelector('#objetivo');
     //oculto desde el CSS; muéstralo.
     objetivo.style.opacity = 1;
    objetivo.classList.add('animate__delay-2s');
    objetivo.style.setProperty('--animate-delay', '0.5s');
    objetivo.classList.add('animate__animated','animate__fadeIn');
    /*<--	*** end objetivo ***	-->*/
    /*<--	*** flecha ***	-->*/
    //contenedor está oculto de entrada; muéstralo
    const flechaContainer =document.querySelector('.continue');
    flechaContainer.style.opacity = 1;
    //anima la flecha
    const flecha = document.querySelector('#arrowStart');
    flecha.classList.add('animate__delay-2s');
    flecha.style.setProperty('--animate-delay', '0.5s');
    flecha.classList.add('animate__animated','animate__bounceInUp');

    
    /*<--	*** end flecha ***	-->*/
}
/*<!------------------------------------------------->
<!--	end coverAnimations	-->
<!------------------------------------------------->*/
/*<------------------------------------------------->
<!--	jumpingArrow	-->
<!-------------------------------------------------->
* Descripción:
    Función retardada por 12 segundos que hace brincar la flecha 12 veces una vez se ha cargado la página. 
* Parámetros:
    -ninguno
* Dependencias:ninguna
* Devuelve/resultado: Después de 12 segundos de ejecutada la página la flecha brincará 12 veces. 
<!------------------------------------------------->*/
function jumpingArrow(){
    const flecha = document.querySelector('#arrowStart');
    flecha.classList.remove('animate__bounceInUp');
    flecha.classList.add('animate__repeat-3');
    flecha.style.setProperty('--animate-delay', '3s');
    flecha.style.setProperty('--animate-repeat', '4');
    flecha.classList.add('animate__bounce');
}
/*<!------------------------------------------------->
<!--	end jumpingArrow	-->
<!------------------------------------------------->*/

/*<------------------------------------------------->
<!--	footerAnimation	-->
<!-------------------------------------------------->
* Descripción:
    Anima el footer en función a si está o no en el viewport
* Parámetros:
    -ninguno
* Dependencias: animate.css, gasp3
* Devuelve/resultado:
El footer se anima al entrar al viewport
<!------------------------------------------------->*/
function footerAnimation(){
    /*<--	*** añadir la clase animate-animated a todas las tarjetas y ajustar el delay ***	-->*/
    const footer = document.querySelector('footer');
    footer.classList.add('animate__animated');

    /*<--	*** end añadir la clase animate-animated a todas las tarjetas y ajustar el delay ***	-->*/
   
    /*<--	*** añadir la clase animate__flipInX cuando entra al viewport ***	-->*/
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(footer, {
        scrollTrigger: {
          trigger: footer,
          start: "top bottom",
          end: "bottom top",
          once: true, //sólo a la carga, la primera vez
          // markers: true,
          // toggleClass:'animate__bounceInUp',
          // markers: true,
            /*<--	*** functions on enter & leave ***	-->*/
            onEnter: function(self){
                
                /*<--	*** fade animation ***	-->*/
                // self.trigger.animate([
                //     {
                //       opacity: '0'
                //     },
                //     {
                //       opacity: '1'
                //     }],
                //     {
                //       duration: 1500
                //     });
                self.trigger.style.opacity = "1"; 
                /*<--	*** end fade animation ***	-->*/ 

                //flip animation
                self.trigger.classList.add('animate__bounceInUp');    
            },
        }
    }); 
    /*<--	*** end añadir la clase animate__flipInX cuando entra al viewport ***	-->*/
     
}
/*<!------------------------------------------------->
<!--	end footerAnimation	-->
<!------------------------------------------------->*/

/*<------------------------------------------------->
<!--	verbAnimation	-->
<!-------------------------------------------------->
* Descripción:
    Anima los verbos en función a si están o no en el viewport
* Parámetros:
    -ninguno
* Dependencias: animate.css, gasp3
* Devuelve/resultado:
Los verbos se anima al entrar al viewport
<!------------------------------------------------->*/
function verbAnimation(){

     gsap.registerPlugin(ScrollTrigger);
 
     const resaltados = gsap.utils.toArray(".resaltado");
     
     resaltados.forEach((resaltado) => {
         gsap.to(resaltado, {
           scrollTrigger: {
             trigger: resaltado,
             start: "top bottom",
             end: "bottom top",
             //once: true, //sólo a la carga, la primera vez
             // markers: true,
             onEnter: function(self){
                 //rubber animation
                 self.trigger.classList.add('animate__animated','animate__pulse','animate__repeat-2');   
             },
             onLeave: function(self){
                //rubber animation
                self.trigger.classList.remove('animate__animated','animate__pulse','animate__repeat-2');   
            },
            onEnterBack: function(self){
                //rubber animation
                self.trigger.classList.add('animate__animated','animate__pulse','animate__repeat-2');   
            },
            onLeaveBack: function(self){
               //rubber animation
               self.trigger.classList.remove('animate__animated','animate__pulse','animate__repeat-2');   
           }
           }
         })
     }); 
     
}
/*<!------------------------------------------------->
<!--	end verbAnimation	-->
<!------------------------------------------------->*/

/*<------------------------------------------------->
<!--	resaltadoAnimacion	-->
<!-------------------------------------------------->
* Descripción:
    Anima los resaltados en función a si están o no en el viewport
* Parámetros:
    -ninguno
* Dependencias: animate.css, gasp3
* Devuelve/resultado:
Los resaltados se anima al entrar al viewport
<!------------------------------------------------->*/
function resaltadoAnimacion(){

    gsap.registerPlugin(ScrollTrigger);

    const verbos = gsap.utils.toArray(".verbo");
    
    verbos.forEach((verbo) => {
        gsap.to(verbo, {
          scrollTrigger: {
            trigger: verbo,
            start: "top bottom",
            end: "bottom top",
            //once: true, //sólo a la carga, la primera vez
            // markers: true,
            onEnter: function(self){
                //rubber animation
                self.trigger.classList.add('animate__animated','animate__rubberBand');   
            },
            onLeave: function(self){
               //rubber animation
               self.trigger.classList.remove('animate__animated','animate__rubberBand');   
           },
           onEnterBack: function(self){
               //rubber animation
               self.trigger.classList.add('animate__animated','animate__rubberBand');   
           },
           onLeaveBack: function(self){
              //rubber animation
              self.trigger.classList.remove('animate__animated','animate__rubberBand');   
          }
          }
        })
    }); 
    
}
/*<!------------------------------------------------->
<!--	end resaltadoAnimacion	-->
<!------------------------------------------------->*/

/*<------------------------------------------------->
<!--	listAnimation	-->
<!-------------------------------------------------->
* Descripción:
    Anima los verbos en función a si están o no en el viewport
* Parámetros:
    -ninguno
* Dependencias: animate.css, gasp3
* Devuelve/resultado:
Los verbos se anima al entrar al viewport
<!------------------------------------------------->*/
function listAnimation(){

    gsap.registerPlugin(ScrollTrigger);

    const listas = gsap.utils.toArray(".listaElement");
    
    listas.forEach((li) => {
        gsap.to(li, {
          scrollTrigger: {
                trigger: li,
                start: "top bottom",
                end: "bottom top",
                //once: true, //sólo a la carga, la primera vez
                // markers: true,
                onEnter: function(self){
                        /*<--	*** fade animation ***	-->*/
                    // self.trigger.animate([
                    //     {
                    //     opacity: '0'
                    //     },
                    //     {
                    //     opacity: '1'
                    //     }],
                    //     {
                    //     duration: 1500
                    //     });
                    self.trigger.style.opacity = "1"; 
                    /*<--	*** end fade animation ***	-->*/ 
                    //rubber animation
                    self.trigger.classList.add('animate__animated','animate__bounceInUp');   
                },
                onLeave: function(self){
 
                    //rubber animation
                    self.trigger.classList.remove('animate__animated','animate__bounceInUp');   
                },
                onEnterBack: function(self){
                    /*<--	*** fade animation ***	-->*/
                    // self.trigger.animate([
                    //     {
                    //     opacity: '0'
                    //     },
                    //     {
                    //     opacity: '1'
                    //     }],
                    //     {
                    //     duration: 1500
                    //     });
                    self.trigger.style.opacity = "1"; 
                    /*<--	*** end fade animation ***	-->*/ 
                    //rubber animation
                    self.trigger.classList.add('animate__animated','animate__bounceInUp');   
                },
                onLeaveBack: function(self){

                    //rubber animation
                    self.trigger.classList.remove('animate__animated','animate__bounceInUp');   
                }
            }
        })
    }); 
    
}
/*<!------------------------------------------------->
<!--	end listAnimation	-->
<!------------------------------------------------->*/