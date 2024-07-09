parallaxImage();
window.onresize = parallaxImage();


/*<------------------------------------------------->
<!--	parallaxImage	-->
<!-------------------------------------------------->
* Descripción:
    Proporciona una imagen diferente para diferentes tamaños de imagen en la ventana Parallax
* Parámetros:
    -ninguno
* Dependencias:ninguna
* Devuelve/resultado: Si el dispositivo mide menos de 576px de ancho desplegará la imagen especial para teléfonos
<!------------------------------------------------->*/
function parallaxImage(){
    var screenWidth =window.screen.width;

    if(screenWidth < 574){
        const images = document.querySelectorAll('.image_parallax');
        images.forEach(function(image){
            image.src="../../assets/images/parallax-dev2-phone.svg";
        });
    }
}
/*<!------------------------------------------------->
<!--	end parallaxImage	-->
<!------------------------------------------------->*/

