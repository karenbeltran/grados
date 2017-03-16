function ConvertirAfarenheit () {
	var celsius=document.getElementById('celsius').value

	var farenheit=document.getElementById('farenheit');
	var resultado = celsius*9/5 + 32;

	farenheit.value=resultado;

	// body...
}
 function ConvertirAcelsius (){
 	var farenheit=document.getElementById('celsius').value

 	var celsius=document.getElementById('farenheit');
 	var resultado = (farenheit-32)*5/9;
 	celsius.value=resultado;

 }





// var grados=parseInt(prompt("Introduzca una temperatura en grados centigrados"));
// alert(grados + "ºC equivalen a: " + ((grados*(9/5))+32) + "ºF.");