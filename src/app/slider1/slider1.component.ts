import { Component } from '@angular/core';

interface Slide {
  imgSrc: string;
  date: string;
  title: string;
}

@Component({
  selector: 'app-slider1',
  templateUrl: './slider1.component.html',
  styleUrls: ['./slider1.component.css'],
})
export class Slider1Component {
  slides = [
    {
      imgSrc: 'assets/img/meetup1.png',
      alt: 'Photo 1',
      date: 'Tue. Apr 4 2023, 9:30 - 18:00',
      title: 'Fuqia e pasionit dhe këmbënguljes për një biznes të suksesshëm',
      description: 'Register Now',
      buttonText: 'Register Now',
    },
    {
      imgSrc: 'assets/img/startup.png',
      alt: 'Photo 1',
      date: 'Tue. Apr 4 2023, 9:30 - 18:00',
      title: 'Fuqia e pasionit dhe këmbënguljes për një biznes të suksesshëm',
      description: 'Register Now',
      buttonText: 'Register Now',
    },
    {
      imgSrc: 'assets/img/meetup2.png',
      alt: 'Photo 1',
      date: 'Tue. Apr 4 2023, 9:30 - 18:00',
      title: 'Personal Branding and Long Term Career Development',
      description: 'Register Now',
      buttonText: 'Register Now',
    },
    {
      imgSrc: 'assets/img/meetup1.png',
      alt: 'Photo 1',
      date: 'Tue. Apr 4 2023, 9:30 - 18:00',
      title: 'Fuqia e pasionit dhe këmbënguljes për një biznes të suksesshëm',
      description: 'Register Now',
      buttonText: 'Register Now',
    },
    {
      imgSrc: 'assets/img/startup.png',
      alt: 'Photo 1',
      date: 'Tue. Apr 4 2023, 9:30 - 18:00',
      title: 'Fuqia e pasionit dhe këmbënguljes për një biznes të suksesshëm',
      description: 'Register Now',
      buttonText: 'Register Now',
    },
    {
      imgSrc: 'assets/img/meetup2.png',
      alt: 'Photo 1',
      date: 'Tue. Apr 4 2023, 9:30 - 18:00',
      title: 'Personal Branding and Long Term Career Development',
      description: 'Register Now',
      buttonText: 'Register Now',
    },
    {
      imgSrc: 'assets/img/meetup1.png',
      alt: 'Photo 1',
      date: 'Tue. Apr 4 2023, 9:30 - 18:00',
      title: 'Fuqia e pasionit dhe këmbënguljes për një biznes të suksesshëm',
      description: 'Register Now',
      buttonText: 'Register Now',
    },
    {
      imgSrc: 'assets/img/startup.png',
      alt: 'Photo 1',
      date: 'Tue. Apr 4 2023, 9:30 - 18:00',
      title: 'Fuqia e pasionit dhe këmbënguljes për një biznes të suksesshëm',
      description: 'Register Now',
      buttonText: 'Register Now',
    },
    {
      imgSrc: 'assets/img/meetup2.png',
      alt: 'Photo 1',
      date: 'Tue. Apr 4 2023, 9:30 - 18:00',
      title: 'Personal Branding and Long Term Career Development',
      description: 'Register Now',
      buttonText: 'Register Now',
    },
  ];

  currentSlide = 0;
  slideWidth = 0;
  gap = 0;
  slidesToShow = 3;

  constructor() {}

  ngOnInit() {
    this.calculateSlideWidth();
    this.updateSlider();
  }

  calculateSlideWidth() {
    const sliderContainerWidth =
      document.querySelector('.slider-container')?.clientWidth || 0;
    const slidesToShow = this.getSlidesToShow();
    this.slideWidth = sliderContainerWidth / slidesToShow;
    this.gap =
      (sliderContainerWidth - this.slideWidth * slidesToShow) /
      (slidesToShow - 1);
  }

  moveLeft() {
    if (this.currentSlide > 0) {
      this.currentSlide -= 1;
      this.updateSlider();
    }
  }

  moveRight() {
    if (this.currentSlide < this.slides.length - this.getSlidesToShow()) {
      this.currentSlide += 1;
      this.updateSlider();
    }
  }

  updateSlider() {
    const offset = -(this.currentSlide * (this.slideWidth + this.gap));
    const sliderContentWrapper = document.querySelector(
      '.slider-content-wrapper-1'
    ) as HTMLElement;
    sliderContentWrapper.style.transform = `translateX(${offset}px)`;
  }

  getSlidesToShow() {
    const sliderContainerWidth =
      document.querySelector('.slider-container-1')?.clientWidth || 0;
    return sliderContainerWidth >= 768
      ? 4
      : sliderContainerWidth >= 480
      ? 2
      : 1;
  }

  changeText(slide: any) {
    slide.buttonText = 'See Event';
  }

  restoreText(slide: any) {
    slide.buttonText = 'Register Now';
  }
}
