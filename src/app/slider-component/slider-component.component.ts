import { Component, OnInit, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-slider-component',
  templateUrl: './slider-component.component.html',
  styleUrls: ['./slider-component.component.css'],
})
export class SliderComponentComponent implements OnInit, AfterViewInit {
  slides: Array<any> = [
    {
      imgSrc: 'assets/img/MICP1.png',
      category: 'STRATEGY',
      title: 'Kanë përfunduar me sukses trajnimet e grupeve në MICP.',
      date: 'Feb 28, 2023',
    },
    {
      imgSrc: 'assets/img/covid1.png',
      category: 'WORKSHOP',
      title: 'Fuqia e pasionit dhe këmbënguljes për një biznes të suksesshëm"',
      date: 'Feb 28, 2023',
    },
    {
      imgSrc: 'assets/img/MICP2.png',
      category: 'STRATEGY',
      title: 'Kanë përfunduar me sukses trajnimet e grupeve në MICP.',
      date: 'Feb 28, 2023',
    },
    {
      imgSrc: 'assets/img/covid2.png',
      category: 'STRATEGY',
      title: 'Kanë përfunduar me sukses trajnimet e grupeve në MICP.',
      date: 'Feb 28, 2023',
    },
    {
      imgSrc: 'assets/img/MICP1.png',
      category: 'STRATEGY',
      title: 'Kanë përfunduar me sukses trajnimet e grupeve në MICP.',
      date: 'Feb 28, 2023',
    },
    {
      imgSrc: 'assets/img/covid1.png',
      category: 'WORKSHOP',
      title: 'Fuqia e pasionit dhe këmbënguljes për një biznes të suksesshëm"',
      date: 'Feb 28, 2023',
    },
    {
      imgSrc: 'assets/img/MICP2.png',
      category: 'STRATEGY',
      title: 'Kanë përfunduar me sukses trajnimet e grupeve në MICP.',
      date: 'Feb 28, 2023',
    },
    {
      imgSrc: 'assets/img/covid2.png',
      category: 'STRATEGY',
      title: 'Kanë përfunduar me sukses trajnimet e grupeve në MICP.',
      date: 'Feb 28, 2023',
    },
  ];

  currentSlide: number = 0;
  slideWidth: number = 0;
  gap: number = 0;

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

  // moveLeft() {
  //   if (this.currentSlide > 0) {
  //     this.currentSlide -= 1;
  //     this.updateSlider();
  //   }
  // }

  // moveRight() {
  //   if (this.currentSlide < this.slides.length - this.getSlidesToShow()) {
  //     this.currentSlide += 1;
  //     this.updateSlider();
  //   }
  // }

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
