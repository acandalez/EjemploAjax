//Este Script hace la funcion de Rellenar tabla con colores aleatorios, seleccionar colores y enviar un mensaje de completado.

var xmlHttp = new XMLHttpRequest();

var celdasseleccionadas=0;
var id_celda_seleccionada=-1;
var pareja_celda_seleccionada=-1;
var celdaslibres = 20;

//funcion de generar colores aleatorios.
function colorAleatorio()
{
	var hexadecimal = ('0123456789ABCDEF').split('');
	var color_aleatorio = '#';
	for ( var i = 0; i < 6; i++)
	{
		color_aleatorio += hexadecimal[Math.floor(Math.random() * 16)];
	}
return color_aleatorio;
}

function mostrarCaja()
{
	// Recogemos el DIV_TABLA que estaba oculto que forma el juego
	var div_tabla = document.getElementById("div_tabla");
	// Quitamos el atributo "style" para que se muestre
	div_tabla.removeAttribute("style");
	// Recogemos el Boton y lo ocultamos
	var boton_rellenar = document.getElementById("Boton");
	boton_rellenar.setAttribute("style","display:none;");
	rellenarCaja();
}

