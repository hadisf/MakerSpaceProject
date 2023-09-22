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
import { AboutUsComponent } from './about-us/about-us.component';
import { AboutUsPartnersComponent } from './about-us-partners/about-us-partners.component';
import { ProvenSuccessComponent } from './proven-success/proven-success.component';
import { SubNavbarComponent } from './sub-navbar/sub-navbar.component';
import { MobAboutPartnersComponent } from './mob-about-partners/mob-about-partners.component';
import { PortfolioAboutComponent } from './portfolio-about/portfolio-about.component';
import { LandscapeAPartnersComponent } from './landscape-a-partners/landscape-a-partners.component';
import { AboutTeamComponent } from './about-team/about-team.component';
import { ContactUsComponent } from './Contact-us/contact-us/contact-us.component';

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
    AboutUsComponent,
    AboutUsPartnersComponent,
    ProvenSuccessComponent,
    SubNavbarComponent,
    MobAboutPartnersComponent,
    PortfolioAboutComponent,
    LandscapeAPartnersComponent,
    AboutTeamComponent,
    ContactUsComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    HttpClientModule,
    SwiperModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
