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
