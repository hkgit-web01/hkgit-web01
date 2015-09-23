var Gallery;
window.onload = function(){
	var gallery = document.querySelectorAll(".gallery");
	if(gallery.length){ 
		gallery[0].classList.add("loaded");

		Gallery = (function(){

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

	}
	

	var menuOpenDom = document.querySelectorAll(".menuOpen");
	menuOpenDom[0].onclick = function(){
		document.querySelector(".mobileNav").classList.add("open");
	};

	var menuCloseDom = document.querySelectorAll(".menuClose");
	menuCloseDom[0].onclick = function(){
		document.querySelector(".mobileNav").classList.remove("open");
	};

};






