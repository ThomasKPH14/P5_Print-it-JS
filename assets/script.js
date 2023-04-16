const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
// Recover the elements
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const bannerImg = document.querySelector('.banner-img');
const tagLine = document.querySelector('#banner p');
const dots = document.querySelectorAll('.dot');

let inprogress = 0;

// arrowleft
arrowLeft.addEventListener('click', () => {
	
	inprogress = (inprogress === 0 ? slides.length - 1 : inprogress - 1 );

	bannerImg.src = `./assets/images/slideshow/${slides[inprogress].image}`;
	tagLine.innerHTML = slides[inprogress].tagLine;

	dots.forEach(dot => dot.classList.remove('dot_selected'));
	dots[inprogress].classList.add('dot_selected');
});

// arrowright
arrowRight.addEventListener('click', () => {

	inprogress = (inprogress === slides.length -1 ? 0 : inprogress + 1 );

	bannerImg.src = `./assets/images/slideshow/${slides[inprogress].image}`;
	tagLine.innerHTML = slides[inprogress].tagLine;

	dots.forEach(dot => dot.classList.remove('dot_selected'));
	dots[inprogress].classList.add('dot_selected');
});