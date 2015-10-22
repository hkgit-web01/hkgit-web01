var Gallery={};
window.onload = function(){
	var gallery = document.querySelectorAll(".gallery");
	if(gallery.length){ 
		// gallery[0].classList.add("loaded");
		classie.add(gallery[0], 'loaded');

		Gallery = (function(){

			var screenDom = document.getElementById("screen");
			var galleryImages = document.querySelectorAll(".gallery img.thumb");
			var i;

			function refreshThumb() {
				var i;
				for (i = 0; i < galleryImages.length; i++){
					// galleryImages[i].classList.remove("selected");
					classie.remove(galleryImages[i], 'selected');
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
					// this.classList.add("selected");
					classie.add(this, 'selected');
				};
			}

			return {
				update: screenUpdate	



			};
		})();

	}
	
	var menuOpenDom = document.querySelectorAll(".menuOpen");
	menuOpenDom[0].onclick = function(){
		// document.querySelector(".mobileNav").classList.add("open");
		classie.add(document.querySelector(".mobileNav"), 'open');
	};

	var menuCloseDom = document.querySelectorAll(".menuClose");
	menuCloseDom[0].onclick = function(){
		// document.querySelector(".mobileNav").classList.remove("open");
		classie.remove(document.querySelector(".mobileNav"), 'open');
	};

	if(Jumbotron) Jumbotron.loop(true);	


};


if (document.querySelectorAll(".jumboContent").length) {
		// index page jumbotron
	var Jumbotron = (function() {

		//init
		var dom = document.querySelectorAll(".jumboContent");
		var domFig = document.querySelector(".jumbo figure");
		var imageHandle=[];
		var styleHandle = document.getElementById("jumboContent").style;
		var current = 0;
		var loopHandle;

		for(var i = 0; i < domFig.children.length; i++){
			imageHandle.push(domFig.children[i]);
		}


		var next = function() {
			if (current == dom.length-1) current = 0;
			else current += 1;
			styleHandle.marginTop = "-" + current + "00%";

			// console.log(domFig.children[current]);
			// console.log(domFig.children[0]);
			domFig.insertBefore(imageHandle[current], domFig.children[0]);

			for(var i = 0; i < domFig.children.length; i++){
				// domFig.children[i].classList.remove("show");
				classie.remove(domFig.children[i], 'show');
			}
			// domFig.children[0].classList.add("show");
			classie.add(domFig.children[0], 'show');
			

		};

		var loop = function(bool) {
			if(bool) {
				loopHandle = window.setInterval(Jumbotron.next, 4500);
			}
			else {
				window.clearInterval(loopHandle);
			}
		};

		return {
			next: next,
			loop: loop
		};
	})();
}




