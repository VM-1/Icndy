let burgerMenu = document.querySelector(".header-nav-burger");
burgerMenu.addEventListener("click", function(){
	burgerMenu.classList.toggle('active');
	document.querySelector(".header-nav-list").classList.toggle('active');
	document.querySelector(".header").classList.toggle('active');
	document.querySelector("body").classList.toggle('lock');
})
let header = document.querySelector("header");
let headerOffset = header.getBoundingClientRect().top
	window.onscroll = function (){
		let scrHeight = window.pageYOffset;
		if (scrHeight >= 5) {
			header.classList.add("scroll")
		}else{
			header.classList.remove("scroll")
		};
	}

let animItems = document.querySelectorAll('.anim-items');
if( animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;
			let animItemPoint = window.innerHeight -  animItemHeight / animStart;
			if (animItemHeight > window.innerHeight ){
				animItemPoint = window.innerHeight - window.innerHeight / animStart
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
				animItem.classList.add('active');
			}else {
				if (!animItem.classList.contains('anim-no-hide')) {
					animItem.classList.remove('active');
				}
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLetf = window.pageXoffSet || document.documentElement.scrollLetf,
			scrollTop = window.pageYoffSet || document.documentElement.scrollTop;
		return {top: rect.top + scrollTop, left: rect.left + scrollLetf }
	}
}
setTimeout(() => {
	animOnScroll();
},300)
let anchors = document.querySelectorAll('.anchor');
if (anchors.length >= 0){
	for (anchor of anchors) {
		anchor.addEventListener('click' , function(){
			event.preventDefault();
			let blockID = anchor.getAttribute('href');
			let anchorLink = document.querySelector(blockID);
			anchorLink.scrollIntoView({
				behavior:"smooth",
				block: "start"
			})		
		})
	}
}