import VSwiper from "./modules/VSwiper";
import Content from "./modules/Content";
import Nav from "./modules/Nav";
import VacancyBtn from "./modules/VacancyBtn";
import citySelector from './custom_modules/CitySelector';
import Countup from './custom_modules/Countup';

/*
	--------------------------------------------
	--------------------------------------------
					SLIDERS
	--------------------------------------------
	--------------------------------------------
 */

	function initCardSlider() {
		swiper.init('.tmpl-hh__card-slider', {
			loop: true,
			slidesPerView: 1,
			centeredSlides: true,
			navigation: {
				prevEl: '.tmpl-hh__card-slider-arrow-prev',
				nextEl: '.tmpl-hh__card-slider-arrow-next',
			},
			breakpoints: {
				1339: {
					spaceBetween: 30
				},
				529: {
					spaceBetween: 15
				}
			},
		})
	}

	function counterScroll() {
		if (isScrolledIntoView(document.querySelector(".tmpl-hh__numbers")) && !isAboutCountersBlockViewed) {
			isAboutCountersBlockViewed = true;
			setTimeout(function (){
				new Countup(".tmpl-hh__numbers");
			}, 200);
		}
	}

	let isAboutCountersBlockViewed = false;
	
	if(window.innerWidth < 529) {
		new Countup(".tmpl-hh__numbers");
	} else {
		window.addEventListener('scroll', counterScroll);
	}

/*
	--------------------------------------------
	--------------------------------------------
						COMMON
	--------------------------------------------
	--------------------------------------------
 */

	const swiper = new VSwiper();
	new Content();
	new Nav();
	new VacancyBtn();
	initCardSlider();
	citySelector.init();