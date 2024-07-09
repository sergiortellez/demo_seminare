
//after window loads
 //init materialize
 M.AutoInit();
 initNavbar();

/*<------------------------------------------------->
<!--	init navbar	-->
<!-------------------------------------------------->
* Descripción:
    Inicia la barra lateral de materialize con algunos parámetros adaptados al diseño
* Parámetros:
    -ninguno
* Dependencias:ninguna
* Devuelve/resultado:inicia la barra de materialize.css
<!------------------------------------------------->*/
function initNavbar(){
    document.addEventListener('DOMContentLoaded', function () {
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems, {
            menuWidth: 500, // Default es 300
            edge: 'right', // Choose the horizontal origin
           // closeOnClick: false, 
            draggable: true 
        });
    });

}
/*<!------------------------------------------------->
<!--	end init navbar	-->
<!------------------------------------------------->*/

