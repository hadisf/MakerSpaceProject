import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isNavbarOpen: boolean = false;

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

  constructor() {}
  ngOnInit() {}
  closeContent() {
    const container = document.querySelector('.container');
    const closeButton = document.querySelector('.close-button');

    if (container) {
      container.remove();
    }

    if (closeButton) {
      closeButton.remove();
    }
  }
}
