
window.onload = function(){
	var gallery = document.querySelectorAll(".gallery");
	gallery[0].classList.add("loaded");


};

var Gallery = (function(){

	var screenDom = document.getElementById("screen");
	var galleryImages = document.querySelectorAll(".gallery img.thumb");
	var i;

	function refreshThumb() {
		var i;
		for (i = 0; i < galleryImages.length; i++){
			galleryImages[i].classList.remove("selected");
		}	
	}

	function screenUpdate(src) {
		refreshThumb();
		screenDom.style.opacity="0";
		screenDom.onload = function(){
			screenDom.style.opacity="1";
			console.log("loaded");
		};
		screenDom.src = src;
	}

	for (i = 0; i < galleryImages.length; i++){
		galleryImages[i].onclick = function(){
			screenUpdate(this.src);
			this.classList.add("selected");
		};
	}

	return {
		update: screenUpdate	



	};
})();




