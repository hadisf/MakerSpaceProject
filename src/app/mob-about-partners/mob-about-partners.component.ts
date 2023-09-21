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
@Component({
  selector: 'app-mob-about-partners',
  templateUrl: './mob-about-partners.component.html',
  styleUrls: ['./mob-about-partners.component.css'],
})
export class MobAboutPartnersComponent {
  @ViewChild('partnersSlider') partnersSlider: any;
  // @ViewChild('mySwiper') mySwiper: Swiper | undefined;

  partnerItemsTransformed: any[] = [];
  swiper: Swiper | undefined;

  constructor() {}

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
