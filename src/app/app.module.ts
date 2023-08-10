import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PartnersSectionComponent } from './partners-section/partners-section.component';
import { SliderComponentComponent } from './slider-component/slider-component.component';
import { Slider1Component } from './slider1/slider1.component';
import { CloseContentComponentComponent } from './close-content-component/close-content-component.component';
import { FooterComponent } from './footer/footer.component';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PartnersSectionComponent,
    SliderComponentComponent,
    Slider1Component,
    CloseContentComponentComponent,
    FooterComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    HttpClientModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
