//función que abre una ventana y muestra un texto
function mostraralerta()
	{
		alert('¡Has hecho click!');
	}
//funcion que al recibir un clic en el objeto llama a la función "mostraralerta"
function hacerclick()
	{
		/*document.getElementsByTagName('p')[0].onclick=mostraralerta;*/
	
		/*document.querySelector("#principal p:first-child").onclick=mostraralerta; //en este ejemplo, la pseudoclase first-child es redundante y esta de adorno ya que "querySelector()" solo devuelve el primer elemento*/
		
		/*var lista=document.querySelectorAll("#principal p");//Aqui crea una cadena con todos los TAGs <p> y los guarda en la variable declarada "LISTA"
			lista[0].onclick=mostraralerta; //Aqui activa la funcion onclick con el primer elemento [0] de la cadena guardada anteriormente en la variable "LISTA"
			
			for(var f=0; f<lista.length; f++)//ciclo o bucle "FOR" que recorre  los elementos guardados en la variable LISTA 
				{//f=0 inicializa el contador "f" asignandole el valor 0; "f<lista-length" define el tamaño de la cadena guardada en la variable LISTA ademas que con "f< >" define la condicion limite donde "f" deja de recorrer la cadena; f++ incrementa el contador "f" una posicion despues de [0] en la cadena
					lista[f].onclick=mostraralerta;//mientras se cumpla la condicion "f<lista-length" se ejecutara la funcion mostraralerta
				}*/
	
		var elemento=document.getElementsByTagName('p')[0];//el objeto "document" tambien puede ser otro tipo de objeto "window" ventana 
			elemento.addEventListener('click', mostraralerta, false);//en la variable "elemento" addEventListener escucha eventos. cuando escucha el parametro "clic" se activa la funcion "mostraralerta". Sino, devuelve el 3er parametro false.
	}
//al cargar la web, llama a la función "hacerclick"
			/*window.onload=hacerclick; //tambien existe el event handler "onfocus" referente a cargar enfoque*/
			window.addEventListener('load', hacerclick, false);//al cargar ("load") la ventana del navegador se carga la funcion "hacerclic" que queda escuchando y esperando que hagamos "clic" sobre el elemento <p> declarado en la variable "ELEMENTO". Sino, devuelve el 3er parametro false.
			
			
			
			
			
			
			
			
			