import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})

export class ContactUsComponent {
  contactForm: FormGroup;
  messageSent: boolean = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      message: ['', Validators.required],
      newsletter: [false, Validators.requiredTrue]
    });
  }

  onSubmit(): void {
    this.contactForm.markAllAsTouched();
    if (this.contactForm.valid) {
      console.log('Form Submitted!', this.contactForm.value);
      this.messageSent = true;

      this.contactForm.reset();

      setTimeout(() => {
        this.messageSent = false;
      }, 3000);
    } else {
      console.log('Invalid form!');
    }
  }

}


