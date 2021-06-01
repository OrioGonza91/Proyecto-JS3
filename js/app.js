var titulo = document.getElementById("title");
var contenido = document.getElementById('content');
var imagen = document.getElementById('image');


function nuevanot()
{
	if (titulo.value.trim() == "" || contenido.value.trim() =="" || imagen.value.trim() =="") 
	{
		alert("Disculpe, verifique si alguno de los campos está vacio.")
		return;
	}

escribirnot(titulo.value,contenido.value,imagen.value);
	
	titulo.value = "";
	contenido.value = "";
	imagen.value = "";
}


function escribirnot(title,content) 
{
	var div = document.createElement("div");
	div.classList.add("col-lg-4","col-sm-6","pt-5");

	var articulo = document.createElement("article");

	var h = document.createElement("h2");
	h.textContent = title;
	h.classList.add("fst-italic","text-decoration-underline","text-muted");

	var img = document.createElement("img");
	img.setAttribute("src",imagen.value);
	img.classList.add("w-100","h-100","rounded");

	var parrafo = document.createElement("p");
	parrafo.textContent = content;
	parrafo.classList.add("fs-4")

	div.append(articulo);
	articulo.append(h);
	articulo.append(img);
	articulo.append(parrafo);

	document.getElementById("container").append(div);

	var boton = document.createElement("button");
	boton.textContent = "X";
	boton.classList.add("btn", "btn-primary", "fw-bold");
	boton.setAttribute("onclick", "remove(this)");

	articulo.append(boton);

}

function remove(boton) 
{
	var confirmacion = confirm("¿Desea eliminar esta noticia?");

	if (confirmacion) 
	{
		boton.closest("article").closest("div").remove();
	}

}