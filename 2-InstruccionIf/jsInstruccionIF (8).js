function mostrar()
{
//tomo la edad 

	var edad;
	var estadoCivil;
	edad=document.getElementById('edad').value;
	estadoCivil=document.getElementById('estadoCivil').value;
	if(edad>18)
	{
		if(estadoCivil=="Soltero")
		{
			alert("Es soltero y no es menor")
		}

	}

}//FIN DE LA FUNCIÓN