/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var datazo;
	datazo=prompt("lamercaestabien");
	document.getElementById('elNombre').value=datazo;
}

