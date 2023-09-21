import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

import SwiperCore, { Navigation, Pagination, Swiper } from 'swiper';
import { SwiperOptions } from 'swiper';

const partnersData = require('../data/partners.json');

SwiperCore.use([Navigation, Pagination]);
@Component({
  selector: 'app-landscape-a-partners',
  templateUrl: './landscape-a-partners.component.html',
  styleUrls: ['./landscape-a-partners.component.css'],
})
export class LandscapeAPartnersComponent implements AfterViewInit {
  @ViewChild('partnersSlider') partnersSlider: any;
  // @ViewChild('mySwiper') mySwiper: Swiper | undefined;

  partnerItemsTransformed: any[] = [];
  swiper: Swiper | undefined;

  constructor() {}
  config: SwiperOptions = {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  };

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
