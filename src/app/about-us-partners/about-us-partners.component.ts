import { AfterViewInit, Component, ViewChild } from '@angular/core';

import SwiperCore, { Navigation, Pagination, Swiper } from 'swiper';
import { SwiperOptions } from 'swiper';

const partnersData = require('../data/partners.json');

SwiperCore.use([Navigation, Pagination]);
@Component({
  selector: 'app-about-us-partners',
  templateUrl: './about-us-partners.component.html',
  styleUrls: ['./about-us-partners.component.css'],
})
export class AboutUsPartnersComponent implements AfterViewInit {
  @ViewChild('partnersSlider') partnersSlider: any;

  partnerItemsTransformed: any[] = [];
  swiper: Swiper | undefined;

  constructor() {}
  private mySwiper: Swiper | undefined;

  config: SwiperOptions = {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  };

  // ngAfterViewInit(): void {
  //   this.partnerItemsTransformed = this.partnerTransformation();
  //   this.initSwiper();
  // }
  ngAfterViewInit(): void {
    this.partnerItemsTransformed = this.partnerTransformation();

    // new Swiper('.mySwiper', {
    //   slidesPerView: 3,
    //   grid: {
    //     rows: 2,
    //   },
    //   spaceBetween: 30,
    //   pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true,
    //   },
    // });
  }

  ngOnInit() {
    this.partnerItemsTransformed = this.partnerTransformation();
    this.partnerTransformation();
  }
  partnerItems = partnersData;

  partnerTransformation() {
    let results = [];
    let groups = 2;

    for (let i = 0; i < this.partnerItems.length; i += groups) {
      results.push(this.partnerItems.slice(i, i + groups));
    }
    return results;
  }

  // private initSwiper() {
  //   this.mySwiper = new Swiper('.swiper-container', {
  //     slidesPerView: this.getSlidesToShow(),
  //     navigation: {
  //       nextEl: '.swiper-button-next',
  //       prevEl: '.swiper-button-prev',
  //     },
  //   });
  // }

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
