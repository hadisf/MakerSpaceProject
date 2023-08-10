import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

import SwiperCore, { Navigation, Pagination, Swiper } from 'swiper';

const partnersData = require('../data/partners.json');

SwiperCore.use([Navigation, Pagination]);

// import 'swiper/swiper-bundle.css';

// import 'swiper/css/navigation';
// import "swiper/css/pagination"

@Component({
  selector: 'app-partners-section',
  templateUrl: './partners-section.component.html',
  styleUrls: ['./partners-section.component.css'],
})
export class PartnersSectionComponent implements AfterViewInit {
  @ViewChild('partnersSlider') partnersSlider: any;
  // @ViewChild('mySwiper') mySwiper: Swiper | undefined;

  partnerItemsTransformed: any[] = [];
  swiper: Swiper | undefined;

  constructor() {}

    // initializeSwiper() {
    //   if (this.mySwiper) {
    //     this.mySwiper = new Swiper('.swiper-container', {
    //       slidesPerView: 1,
    //       allowTouchMove: false,
    //       spaceBetween: 5,
    //       loop: true,

    //       navigation: {
    //         prevEl: '#prevArrowPt',
    //         nextEl: '#nextArrowPt',
    //       },

    //       pagination: {
    //         el: '.swiper-pagination',
    //         clickable: true,
    //         type: 'bullets',
    //         renderBullet: (index, className) => {
    //           return `<span class="${className} custom-bullet">${
    //             index + 1
    //           }</span>`;
    //         },
    //       },
    //     });
    //   }
    // }
  // initializeSwiper() {
  //   this.swiper = new Swiper('.swiper-container', {
  //     slidesPerView: 2,
  //     loop: true,
  //     spaceBetween: 5,
  //     loopedSlides: Math.ceil(this.partnerItemsTransformed.length),
  //     navigation: {
  //       prevEl: '#prevArrowPt',
  //       nextEl: '#nextArrowPt',
  //     },
  //     pagination: { clickable: true },
  //   });
  // }

  // prevSlide() {
  //   if (this.mySwiper) {
  //     this.mySwiper.slidePrev();
  //   }
  // }

  // nextSlide() {
  //   if (this.mySwiper) {
  //     this.mySwiper.slideNext();
  //   }
  // }

  ngAfterViewInit(): void {
    this.partnerItemsTransformed = this.partnerTransformation();

    // this.initializeSwiper();
  }
  ngOnInit() {
    this.partnerItemsTransformed = this.partnerTransformation();
    this.partnerTransformation();
  }
  partnerItems = partnersData;

  partnerTransformation() {
    let results = [];
    let groups = 3;
    for (let i = 0; i < this.partnerItems.length; i += groups) {
      results.push(this.partnerItems.slice(i, i + groups));
    }
    return results;
  }
}
