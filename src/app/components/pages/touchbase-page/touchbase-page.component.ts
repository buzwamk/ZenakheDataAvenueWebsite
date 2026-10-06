import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-touchbase-page',
    templateUrl: './touchbase-page.component.html',
    styleUrls: ['./touchbase-page.component.scss']
})
export class TouchbasePageComponent implements OnInit {

    constructor() {}

    ngOnInit(): void {}

    pageTitleArea: PageTitle[] = [
        {
            title: 'TouchBase'
        }
    ];

    sectionTitle: SectionTitleContent[] = [
        {
            subTitle: 'Our Product Platform',
            title: 'TouchBase — Connect, Engage, Grow',
            paragraphText: 'TouchBase is our flagship platform for building meaningful connections between organisations and the communities they serve. Purpose-built for African businesses and designed for low-bandwidth environments.'
        }
    ];

    singleFeaturesBox: FeaturesBoxContent[] = [
        {
            icon: 'flaticon-rocket',
            title: 'Fast & Lightweight',
            paragraphText: 'Optimised to perform on any connection, so your users stay engaged no matter where they are.'
        },
        {
            icon: 'flaticon-laptop',
            title: 'Built to Scale',
            paragraphText: 'From a handful of users to millions, TouchBase grows with your organisation without missing a beat.'
        },
        {
            icon: 'flaticon-settings',
            title: 'Fully Customisable',
            paragraphText: 'Tailor workflows, branding, and integrations to fit the way your team already works.'
        },
        {
            icon: 'flaticon-shield',
            title: 'Secure by Design',
            paragraphText: 'Enterprise-grade security and privacy controls keep your data and your community protected.'
        }
    ];

    ctaContent: CtaContent[] = [
        {
            title: 'Ready to see TouchBase in action?',
            paragraphText: 'Get in touch with our team for a personalised demo tailored to your organisation.',
            btnText: 'Get in Touch',
            btnLink: 'contact',
            btnIcon: 'flaticon-right'
        }
    ];
}

class PageTitle {
    title: string;
}

class SectionTitleContent {
    subTitle: string;
    title: string;
    paragraphText: string;
}

class FeaturesBoxContent {
    icon: string;
    title: string;
    paragraphText: string;
}

class CtaContent {
    title: string;
    paragraphText: string;
    btnText: string;
    btnLink: string;
    btnIcon: string;
}
