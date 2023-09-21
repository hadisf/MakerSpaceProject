import { Component, OnInit, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-portfolio-about',
  templateUrl: './portfolio-about.component.html',
  styleUrls: ['./portfolio-about.component.css'],
})
export class PortfolioAboutComponent {
  slides = [
    {
      category: 'FASHION',
      date: '2023',
      title: 'Kosovo Digital Economy (KODE) Project',
      description:
        "Moveworks re-imagines retirement with a pension for millions of people. It is India's first digital pension platform that empowers...",
      image: 'assets/img/portfolio-slide-img1.png',
    },
    {
      category: 'FASHION',
      date: '2023',
      title: 'Kosovo Digital Economy (KODE) Project',
      description:
        "Moveworks re-imagines retirement with a pension for millions of people. It is India's first digital pension platform that empowers...",
      image: 'assets/img/portfolio-slide-img2.png',
    },
    {
      category: 'FASHION',
      date: '2023',
      title: 'Kosovo Digital Economy (KODE) Project',
      description:
        "Moveworks re-imagines retirement with a pension for millions of people. It is India's first digital pension platform that empowers...",
      image: 'assets/img/portfolio-slide-img3.png',
    },
    {
      category: 'FASHION',
      date: '2023',
      title: 'Kosovo Digital Economy (KODE) Project',
      description:
        "Moveworks re-imagines retirement with a pension for millions of people. It is India's first digital pension platform that empowers...",
      image: 'assets/img/portfolio-slide-img1.png',
    },
    {
      category: 'FASHION',
      date: '2023',
      title: 'Kosovo Digital Economy (KODE) Project',
      description:
        "Moveworks re-imagines retirement with a pension for millions of people. It is India's first digital pension platform that empowers...",
      image: 'assets/img/portfolio-slide-img2.png',
    },
    {
      category: 'FASHION',
      date: '2023',
      title: 'Kosovo Digital Economy (KODE) Project',
      description:
        "Moveworks re-imagines retirement with a pension for millions of people. It is India's first digital pension platform that empowers...",
      image: 'assets/img/portfolio-slide-img3.png',
    },
    {
      category: 'FASHION',
      date: '2023',
      title: 'Kosovo Digital Economy (KODE) Project',
      description:
        "Moveworks re-imagines retirement with a pension for millions of people. It is India's first digital pension platform that empowers...",
      image: 'assets/img/portfolio-slide-img1.png',
    },
    {
      category: 'FASHION',
      date: '2023',
      title: 'Kosovo Digital Economy (KODE) Project',
      description:
        "Moveworks re-imagines retirement with a pension for millions of people. It is India's first digital pension platform that empowers...",
      image: 'assets/img/portfolio-slide-img2.png',
    },
    {
      category: 'FASHION',
      date: '2023',
      title: 'Kosovo Digital Economy (KODE) Project',
      description:
        "Moveworks re-imagines retirement with a pension for millions of people. It is India's first digital pension platform that empowers...",
      image: 'assets/img/portfolio-slide-img3.png',
    },
    // Add more project objects here
  ];

  currentSlide: number = 0;
  slideWidth: number = 0;
  gap: number = 0;
  slidesToShow = 3;

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

  updateSlider() {
    const offset = -(this.currentSlide * (this.slideWidth + this.gap));
    const sliderContentWrapper = document.querySelector(
      '.slider-content-wrapper'
    ) as HTMLElement;
    sliderContentWrapper.style.transform = `translateX(${offset}px)`;
  }

  private mySwiper: Swiper | undefined;

  constructor() {}

  ngAfterViewInit() {
    this.initSwiper();
  }

  private initSwiper() {
    this.mySwiper = new Swiper('.swiper-container', {
      slidesPerView: this.getSlidesToShow(),
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }

  getSlidesToShow() {
    const sliderContainerWidth =
      document.querySelector('.swiper-container')?.clientWidth || 0;
    return sliderContainerWidth >= 768
      ? 4
      : sliderContainerWidth >= 480
      ? 2
      : 1;
  }
}
