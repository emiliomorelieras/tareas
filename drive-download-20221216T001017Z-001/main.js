// Crea una variable lienzo
var lienzo = new fabric.Canvas('miLienzo')

block_y=1;
block_x=1;

block_image_width = 350;
block_image_height = 480;

var bloque_objeto_imagen= "";

// Completa la función nueva_imagen() para agregar una nueva imagen
function nueva_imagen(get_image)
{
	fabric.Image.fromURL(get_image, function(Img){
		bloque_objeto_imagen =Img;
		bloque_objeto_imagen =Img;
		bloque_objeto_imagen.scaleToWidth(block_image_width);
		bloque_objeto_imagen.scaleToHeightblock_image_Height);
		bloque_objeto_imagen.set({top:block_y,left:block_X});
		lienzo.add(bloque_objeto_imagen);
		
		
	}
	






	

}

window.addEventListener("keydown", mi_TeclaPulsada);

function mi_TeclaPulsada(e)
{
teclaPresionada = e.keyCode;
console.log(teclaPresionada);
	// Usa el código de tecla apropiado para agregar la imagen roja
	if(teclaPresionada =="82" ) 
	{
		block_x = 10;
		nueva_imagen("rojo.jpg");
		console.log(R)
	}
	

	{
		block_X=10;
		nueva_imagen(`rojo.jpg);
		console.log(`R`)
		



	}

		
		


	}
	// Usa el código de tecla apropiado para agregar la imagen amarilla
	if(teclaPresionada == )
	{

		

		if(teclaPresionada =="71" ) 

	{
		block_X=310;
		nueva_imagen(`verde.pngg);
		console.log(`G`)
		
		
		if(teclaPresionada =="89" ) 

	{
		block_X=310;
		nueva_imagen(`amarillo.png);
		console.log(`Y`)
		
		


	}
	// Usa el código de tecla apropiado para agregar la imagen rosa
	if(teclaPresionada == )
	{
	

		if(teclaPresionada =="8" ) 

		{
			block_X=880;
			nueva_imagen(`rosa.png);
			console.log(`P`)
			
			
	
	}
	// Usa el código de tecla apropiado para agregar la imagen azul
	if(teclaPresionada =="66" )
	{
		block_X=1040;
		nueva_imagen("azul.png")
		console.log("B")

	}
	
}

