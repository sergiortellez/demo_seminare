var nombreColegio = 'mi colegio';
deploySchool();

/*<------------------------------------------------->
<!--	deploySchool	-->
<!-------------------------------------------------->
* Descripción:
    Ajustando la variable global se puede fácilmente cambiar entre una escuela y otra, busca en los documentos los lugares donde está escrito el nombre del colegio (class='colegio' y lo rellena en el contenido html
* Parámetros:
    -ninguno
* Dependencias:ninguna
* Devuelve/resultado: El nombre de la escuela escrito en la variable global aparece correctamente.
<!------------------------------------------------->*/
function deploySchool(){
    let contenedores = document.querySelectorAll('.colegio');
    contenedores.forEach(colegio => {
        colegio.innerHTML = nombreColegio;
    });
}
/*<!------------------------------------------------->
<!--	end deploySchool	-->
<!------------------------------------------------->*/