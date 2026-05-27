import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-services-page',
    templateUrl: './services-page.component.html',
    styleUrls: ['./services-page.component.scss']
})
export class ServicesPageComponent implements OnInit {

    constructor() {}

    ngOnInit(): void {}

    pageTitleArea: PageTitle[] = [
        {
            title: 'Our Services'
        }
    ];

    singleServicesBox: ServicesBoxContent[] = [
        {
            icon: 'flaticon-rocket',
            title: 'Data Analytics',
            paragraphText: 'We design end-to-end analytics solutions — from data ingestion and warehousing to interactive dashboards that give your team real-time visibility.',
            link: 'contact'
        },
        {
            icon: 'flaticon-laptop',
            title: 'AI & Machine Learning',
            paragraphText: 'Custom AI models and ML pipelines built for your specific data and business objectives — from classification to natural language processing.',
            link: 'contact'
        },
        {
            icon: 'flaticon-phone',
            title: 'Mobile App Development',
            paragraphText: 'Cross-platform mobile applications for Android and iOS, designed with South African users in mind and built for low-bandwidth environments.',
            link: 'contact'
        },
        {
            icon: 'flaticon-web',
            title: 'Web Development',
            paragraphText: 'Scalable, secure web applications and platforms — from customer-facing portals to internal business tools — built with modern frameworks.',
            link: 'contact'
        },
        {
            icon: 'flaticon-structure',
            title: 'Predictive Analytics',
            paragraphText: 'Forecast demand, detect anomalies, and model future scenarios using statistical methods and machine learning tailored to your industry.',
            link: 'contact'
        },
        {
            icon: 'flaticon-money',
            title: 'Digital Transformation Consulting',
            paragraphText: 'We help businesses map their digital journey — identifying automation opportunities, modernising legacy systems, and building a data-first culture.',
            link: 'contact'
        }
    ];
}

class PageTitle {
    title: string;
}

class ServicesBoxContent {
    icon: string;
    title: string;
    paragraphText: string;
    link: string;
}
