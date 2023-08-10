import { Component } from '@angular/core';

@Component({
  selector: 'app-close-content-component',
  templateUrl: './close-content-component.component.html',
  styleUrls: ['./close-content-component.component.css'],
})
export class CloseContentComponentComponent {
  closeContent() {
    const attentiongrabber = document.querySelector('#attention-grabber');
    const closeButton = document.querySelector('.close-button');

    // nese elementi me klasin container ekziston, fshij elementin nga dom
    if (attentiongrabber) {
      attentiongrabber.remove();
    }

    // nese ekziston fshij
    if (closeButton) {
      closeButton.remove();
    }
  }
}
