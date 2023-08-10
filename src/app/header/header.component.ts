import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}
  ngOnInit() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    // Null kontrolü yaparak ve non-null asertion operatörünü kullanarak güncelledik.
    if (hamburger && navMenu) {
      hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
      });
    }
  }
  closeContent() {
    const container = document.querySelector('.container');
    const closeButton = document.querySelector('.close-button');

    // nese elementi me klasin container ekziston, fshij elementin nga dom
    if (container) {
      container.remove();
    }

    // nese ekziston fshij
    if (closeButton) {
      closeButton.remove();
    }
  }
}
