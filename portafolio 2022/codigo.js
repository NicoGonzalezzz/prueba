let animado = document.querySelectorAll(".animado");

function mostrarScroll(){
	let scrollTop = document.documentElement.scrollTop;
	for (var i=0; i < animado.length; i++) {
		let alturaAnimado = animado[i].offsetTop;
		if(alturaAnimado - 600 < scrollTop) {
			animado[i].style.opacity = 1;
			animado[i].classList.add("mostrarArriba");
		}  else {
			animado[i].classList.remove("mostrarArriba")
			animado[i].style.opacity = 0;
		}
	}
}


window.addEventListener('scroll', mostrarScroll);