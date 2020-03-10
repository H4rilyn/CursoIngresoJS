/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	var primerNumero;
	var resultado;
	primerNumero=document.getElementById('sueldo').value;
	primerNumero=parseInt(primerNumero);
	resultado=primerNumero*10/100+primerNumero;
	document.getElementById('resultado').value=resultado;
}
