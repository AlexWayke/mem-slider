class Slider {
  constructor(slider){
    this.slider = document.querySelector(slider),
    this.wrapper = this.slider.querySelector('.slider__wrapper'),
    this.template = this.slider.querySelector('.slider__template'),
    this.slides = this.slider.querySelectorAll('.slider__slide'),
    this.tabs = this.slider.querySelector('.slider__tabs')
  }

  setWidth(){
    let currentWidth = this.wrapper.offsetWidth;
    let countOfSlides = Array.from(this.slides).length;
    let activeSlide = this.tabs.querySelector('.active').dataset.order;

    this.slides.forEach(slide => {
      slide.style.width = `${currentWidth}px`;
    });
    this.template.style.width = `${currentWidth * countOfSlides}px`
    this.template.style.transform = `translateX(${-currentWidth * activeSlide}px)`
  }

  slideTo(btn, id){
    let currentWidth = this.wrapper.offsetWidth;
    let activeBtn = this.tabs.querySelector('.active');
    
    activeBtn.classList.remove('active');
    btn.classList.add('active');
    this.template.style.transform = `translateX(${-currentWidth * id}px)`
  }

  showSlider(){
    this.setWidth();
  }
}

const slider = new Slider('.slider');

slider.showSlider();

window.addEventListener('resize', function() {
  slider.setWidth();
}, true);