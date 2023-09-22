import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SliderComponentComponent } from './slider-component/slider-component.component';
import { HeaderComponent } from './header/header.component';
import { CloseContentComponentComponent } from './close-content-component/close-content-component.component';
import { FooterComponent } from './footer/footer.component';
import { Slider1Component } from './slider1/slider1.component';
import { PartnersSectionComponent } from './partners-section/partners-section.component';
import { HttpClientModule } from '@angular/common/http';
import { SubNavbarComponent } from './sub-navbar/sub-navbar.component';
import { ProvenSuccessComponent } from './proven-success/proven-success.component';
import { AboutUsPartnersComponent } from './about-us-partners/about-us-partners.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MobAboutPartnersComponent } from './mob-about-partners/mob-about-partners.component';
import { PortfolioAboutComponent } from './portfolio-about/portfolio-about.component';
import { LandscapeAPartnersComponent } from './landscape-a-partners/landscape-a-partners.component';
import { AboutTeamComponent } from './about-team/about-team.component';
import { ContactUsComponent } from './Contact-us/contact-us/contact-us.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  { path: 'home', component: HomeComponent },
  {
    path: 'slider',
    component: SliderComponentComponent,
  },
  { path: 'header', component: HeaderComponent },
  { path: 'close', component: CloseContentComponentComponent },
  { path: 'slider1', component: Slider1Component },
  { path: 'footer', component: FooterComponent },
  { path: 'partners', component: PartnersSectionComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'sub-navbar', component: SubNavbarComponent },
  { path: 'proven-success', component: ProvenSuccessComponent },
  { path: 'about-partners', component: AboutUsPartnersComponent },
  { path: 'mob-about-partners', component: MobAboutPartnersComponent },
  { path: 'protfolio-about', component: PortfolioAboutComponent },
  { path: 'landscape-a-partners', component: LandscapeAPartnersComponent },
  { path: 'about-team', component: AboutTeamComponent },
  { path: 'contact-us', component: ContactUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule],
  bootstrap: [],
})
export class AppRoutingModule {}
