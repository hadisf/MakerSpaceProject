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
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule],
  bootstrap: [],
})
export class AppRoutingModule {}
