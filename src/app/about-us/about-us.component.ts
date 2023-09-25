import { AfterViewInit, Component, ViewChild } from '@angular/core';

import SwiperCore, { Navigation, Pagination, Swiper } from 'swiper';

const partnersData = require('../data/partners.json');

SwiperCore.use([Navigation, Pagination]);
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
})
export class AboutUsComponent implements AfterViewInit {
  isReadMoreVisible = false;

  @ViewChild('partnersSlider') partnersSlider: any;
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
    let groups = 2;

    for (let i = 0; i < this.partnerItems.length; i += groups) {
      results.push(this.partnerItems.slice(i, i + groups));
    }
    return results;
  }

  showMore = false;

  toggleReadMore() {
    this.showMore = !this.showMore;
  }
}
