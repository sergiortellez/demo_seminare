
/*<--	*** on window load ***	-->*/
window.onload = function() {
    navAnimations();
    cardsAnimation();
    titlesAnimation();
    footerAnimation();
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
    nav.classList.add('animate__animated','animate__bounceInDown');
    /*<--	*** end navbar  ***	-->*/

    /*<--	*** logo ***	-->*/
    const logo = document.querySelector('.logo-nav-container');

    logo.classList.add('animate__delay-2s');
    logo.style.setProperty('--animate-delay', '0.3s');
    logo.classList.add('animate__animated','animate__bounceInLeft');
    /*<--	*** end logo ***	-->*/
    
    /*<--	*** menu ***	-->*/
    const menu = document.querySelector('nav>ul');

    menu.classList.add('animate__delay-2s');
    menu.style.setProperty('--animate-delay', '0.3s');
    menu.classList.add('animate__animated','animate__bounceInRight');
    /*<--	*** end menu ***	-->*/

     /*<--	*** user ***	-->*/
     const user = document.querySelector('nav>div');
 
     user.classList.add('animate__delay-2s');
     user.style.setProperty('--animate-delay', '0.3s');
     user.classList.add('animate__animated','animate__bounceInRight');
     /*<--	*** end user ***	-->*/   
}
/*<!------------------------------------------------->
<!--	end navAnimations	-->
<!------------------------------------------------->*/

/*<------------------------------------------------->
<!--	cardsAnimation	-->
<!-------------------------------------------------->
* Descripción:
    Anima las tarjetas de semanas en función a si están o no en el viewport
* Parámetros:
    -ninguno
* Dependencias: animate.css, gasp3
* Devuelve/resultado:
Las tarjetas se animar al entrar al viewport
<!------------------------------------------------->*/
function cardsAnimation(){
    /*<--	*** añadir la clase animate-animated a todas las tarjetas y ajustar el delay ***	-->*/
    const cardsGroup = document.querySelectorAll('.card');
    cardsGroup.forEach(function(card){
        card.classList.add('animate__animated','animate__delay-1s');
        card.style.setProperty('--animate-delay', '0.3s');

    });
    /*<--	*** end añadir la clase animate-animated a todas las tarjetas y ajustar el delay ***	-->*/
   
    /*<--	*** añadir la clase animate__flipInX cuando entra al viewport ***	-->*/
    gsap.registerPlugin(ScrollTrigger);


    const cards = gsap.utils.toArray(".card");
    
    cards.forEach((card) => {
        gsap.to(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            end: "90% 25%",
            once: true, //sólo a la carga, la primera vez
            // toogleActions:'play complete complete pause' ,
            //scrub: true, (no queremos que se reproduzca para adelante y para atrás con el scroll)
            id:"cards",
           // markers: true,
            /*<--	*** functions on enter & leave ***	-->*/
            onEnter: function(self){

                /*<--	*** end fade animation ***	-->*/ 
                //reveal & bounce animation
                self.trigger.classList.add('opacity','animate__bounceInUp');
                
   
            },
            
          
          }
          
        })
    }); 
    /*<--	*** end añadir la clase animate__flipInX cuando entra al viewport ***	-->*/
    
}
/*<!------------------------------------------------>
<!--	end cardsAnimation	-->
<!------------------------------------------------->*/

/*<------------------------------------------------->
<!--	titlesAnimation	-->
<!-------------------------------------------------->
* Descripción:
    Anima los títulos en función a si están o no en el viewport
* Parámetros:
    -ninguno
* Dependencias: animate.css, gasp3
* Devuelve/resultado:
Los titulos  se animan al entrar al viewport
<!------------------------------------------------->*/
function titlesAnimation(){
    /*<--	*** añadir la clase animate-animated a todas las tarjetas y ajustar el delay ***	-->*/
    const titlesGroup = document.querySelectorAll('.titulo');
    titlesGroup.forEach(function(title){
        title.classList.add('animate__animated','animate__delay-2s');
        title.style.setProperty('--animate-delay', '0.3s');

    });
    /*<--	*** end añadir la clase animate-animated a todas las tarjetas y ajustar el delay ***	-->*/
   
    /*<--	*** añadir la clase animate__flipInX cuando entra al viewport ***	-->*/
    gsap.registerPlugin(ScrollTrigger);

    const titles = gsap.utils.toArray(".titulo");
    
    titles.forEach((title) => {
        gsap.to(title, {
          scrollTrigger: {
            trigger: title,
            start: "top bottom",
            end: "bottom top",
            once: true, //sólo a la carga, la primera vez
            // markers: true,
            onEnter: function(self){
                
                self.trigger.style.opacity = "1"; 
                /*<--	*** end fade animation ***	-->*/ 

                //bounce animation
                self.trigger.classList.add('animate__bounceInUp');    
            },
          }
        })
    }); 
    /*<--	*** end añadir la clase animate__flipInX cuando entra al viewport ***	-->*/
    
}
/*<!------------------------------------------------->
<!--	end titlesAnimation	-->
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

                //bounce animation
                self.trigger.classList.add('animate__bounceInUp');    
            },
        }
    }); 
    /*<--	*** end añadir la clase animate__flipInX cuando entra al viewport ***	-->*/
     
}
/*<!------------------------------------------------->
<!--	end footerAnimation	-->
<!------------------------------------------------->*/