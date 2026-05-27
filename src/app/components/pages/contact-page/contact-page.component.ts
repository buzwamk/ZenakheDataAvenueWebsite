import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../../../services/contact.service';

@Component({
    selector: 'app-contact-page',
    templateUrl: './contact-page.component.html',
    styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

    contactForm: FormGroup;
    submitted   = false;
    loading     = false;
    successMsg  = '';
    errorMsg    = '';
    fieldErrors: { [key: string]: string } = {};

    constructor(
        private fb: FormBuilder,
        private contactService: ContactService
    ) {}

    ngOnInit(): void {
        this.contactForm = this.fb.group({
            name:    ['', [Validators.required, Validators.minLength(2), Validators.maxLength(120)]],
            email:   ['', [Validators.required, Validators.email]],
            phone:   [''],
            message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(2000)]]
        });
    }

    // Convenience getter for template access
    get f() { return this.contactForm.controls; }

    onSubmit(): void {
        this.errorMsg   = '';
        this.successMsg = '';
        this.fieldErrors = {};

        if (this.contactForm.invalid) {
            this.contactForm.markAllAsTouched();
            return;
        }

        this.loading = true;

        this.contactService.submit(this.contactForm.value).subscribe({
            next: (res) => {
                this.loading   = false;
                this.submitted = true;
                this.successMsg = res.message;
                this.contactForm.reset();
            },
            error: (err) => {
                this.loading = false;
                // Handle field-level validation errors from API
                if (err.errors && Array.isArray(err.errors)) {
                    err.errors.forEach((e: { field: string; message: string }) => {
                        this.fieldErrors[e.field] = e.message;
                    });
                    this.errorMsg = 'Please fix the errors below.';
                } else {
                    this.errorMsg = err.message || 'Something went wrong. Please try again.';
                }
            }
        });
    }

    pageTitleArea = [{ title: 'Contact Us' }];

    contactInfoBox1 = [{
        icon: 'bx bx-map',
        title: 'Our Office',
        location: '132 Apollo St, Table View, Cape Town, South Africa'
    }];

    contactInfoBox2 = [{
        icon: 'bx bx-phone-call',
        title: 'Get in Touch',
        number: '+27664008274',
        email: 'info@zendata-avenue.co.za'
    }];

    contactInfoBox3 = [{
        icon: 'bx bx-time-five',
        title: 'Working Hours',
        text1: 'Monday – Friday: 09:00 – 18:00',
        text2: 'Saturday: 10:00 – 14:00'
    }];

    sectionTitle = [{
        subTitle: 'Get In Touch',
        title: 'Ready to Start Your Project?',
        paragraphText: 'Tell us about your challenge and we will get back to you within one business day.'
    }];

    contactImage = [{ img: 'assets/img/contact.svg' }];
}
