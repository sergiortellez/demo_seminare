/*<--	*** after window loads ***	-->*/
//init materialize
M.AutoInit();
initNavbar();
// document.documentElement.style.setProperty();
/*<--	*** end after window loads ***	-->*/



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
        var sideNavs = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(sideNavs, {
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