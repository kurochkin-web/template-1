document.addEventListener('DOMContentLoaded', () => {

// accordion
	const accordion = document.querySelectorAll('.accordion__item');

	for(item of accordion) {
		item.addEventListener('click', function() {
			if (this.classList.contains('active')) {
				this.classList.remove('active')
			}
			else {
				for(el of accordion) {
					el.classList.remove('active')
				}
				this.classList.add('active');
			}
		});
	};

//slider
	let   position = 0;
	const slidesToShow = 2,
	 	  slidesToScroll = 2,
	 	  container = document.querySelector('.reviews__carousel'),
	 	  track = document.querySelector('.carousel__wrapper'),
	 	  itemSlider = document.querySelectorAll('.carousel__item'),
	 	  btnNext = document.querySelector('.arrow__next'),
	 	  btnPrev = document.querySelector('.arrow__prev');

	let   style = window.getComputedStyle(container, null),
		  padding = parseFloat(style.paddingBottom);

	container.style.height = `${itemSlider[0].clientHeight * slidesToShow + padding}px`;

	let   movePosition = slidesToScroll * ((container.clientHeight - padding) / slidesToShow) + slidesToScroll;

	btnNext.addEventListener('click', () => {
        position -= movePosition;

        setPosition();
        checkBtns();
    });

    btnPrev.addEventListener('click', () => {
        position += movePosition;

        setPosition();
        checkBtns();
    });

    const setPosition = () => {
      track.style.transform = `translateY(${position}px)`
    };

    const checkBtns = () => {
      btnPrev.disabled = position === 0;
      btnNext.disabled = position <= -(track.clientHeight - (itemSlider[0].clientHeight * slidesToShow));
    };

    checkBtns();

    //slider-team

const slider = document.querySelector('.slider__list');
const $ = selector => {
  return document.querySelector(selector);
};

slider.addEventListener('click', (event) => {
    const target = event.target;

    if(target.classList.contains('next')){
        let src;

    if ($(".hide")) {
            src = $(".hide").src;
          $(".hide").remove();
        }
        
        // Step
        if ($(".prev")) {
          $(".prev").classList.add("hide");
          $(".prev").classList.remove("prev");
        }
        
        $(".act").classList.add("prev");
        $(".act").classList.remove("act");
        
        $(".next").classList.add("act");
        $(".next").classList.remove("next");
        
        // New next
        $(".new-next").classList.remove("new-next");
        
        let addedEl = document.createElement("img");
        addedEl.src = src;
        $(".slider__list").appendChild(addedEl);
        addedEl.classList.add("slider__item", "next", "new-next");
        slideTextNext();

    } else if(target.classList.contains('prev')){
        src = $(".new-next").src;
        $(".new-next").remove();

        // Step
        $(".next").classList.add("new-next");
        
        $(".act").classList.add("next");
        $(".act").classList.remove("act");
        
        $(".prev").classList.add("act");
        $(".prev").classList.remove("prev");
        
        // New prev
        $(".hide").classList.add("prev");
        $(".hide").classList.remove("hide");
        
        let _addedEl = document.createElement("img");
        _addedEl.src = src;

        $(".slider__list").insertBefore(_addedEl, $(".slider__list").firstChild);
        _addedEl.classList.add("hide", "slider__item");
        slideTextPrev();
    }
});

const contentSlide = document.querySelectorAll('.content__item');
  let i = 0;
  slideTextNext();

function slideTextNext() {

      contentSlide.forEach((item) => {
          item.classList.remove('active');
      });

       if(i+1 === contentSlide.length) {
          i=0
       } else {
          i++
       };
     contentSlide[i].classList.add('active');
}

function slideTextPrev() {
      
      contentSlide.forEach((item) => {
          item.classList.remove('active');
      });

      if(i == 0) {
          i = contentSlide.length - 1;
       } else {
          i--;
       };

     contentSlide[i].classList.add('active');  
}






});