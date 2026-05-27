import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-homeone-services',
    templateUrl: './homeone-services.component.html',
    styleUrls: ['./homeone-services.component.scss']
})
export class HomeoneServicesComponent implements OnInit {

    constructor() {}

    ngOnInit(): void {}

    sectionTitle: SectionTitleContent[] = [
        {
            subTitle: 'Our Services',
            title: 'End-to-End Digital Services',
            paragraphText: 'We deliver specialised technology services that solve real business problems — from data strategy to production-ready software.'
        }
    ];

    singleServicesBox: ServicesBoxContent[] = [
        {
            icon: 'assets/img/services/icon1.svg',
            title: 'Data Analytics',
            paragraphText: 'We design dashboards, reports, and data pipelines that give your team clear, actionable visibility into your business.',
            link: 'services',
            linkText: 'Learn More',
            linkIcon: 'flaticon-right'
        },
        {
            icon: 'assets/img/services/icon2.svg',
            title: 'AI & Machine Learning',
            paragraphText: 'From recommendation engines to predictive models, we build AI solutions tailored to your industry and data.',
            link: 'services',
            linkText: 'Learn More',
            linkIcon: 'flaticon-right'
        },
        {
            icon: 'assets/img/services/icon3.svg',
            title: 'Mobile App Development',
            paragraphText: 'Native and cross-platform mobile apps built for South African users — fast, reliable, and intuitive.',
            link: 'services',
            linkText: 'Learn More',
            linkIcon: 'flaticon-right'
        },
        {
            icon: 'assets/img/services/icon5.svg',
            title: 'Web Development',
            paragraphText: 'Modern, responsive web applications and platforms engineered for performance and built to scale.',
            link: 'services',
            linkText: 'Learn More',
            linkIcon: 'flaticon-right'
        },
        {
            icon: 'assets/img/services/icon4.svg',
            title: 'Predictive Analytics',
            paragraphText: 'Anticipate market shifts and customer behaviour with statistical models and machine learning forecasting.',
            link: 'services',
            linkText: 'Learn More',
            linkIcon: 'flaticon-right'
        }
    ];

    loadMoreBtn: LoadMore[] = [
        {
            link: 'services',
            linkText: 'View All Services',
            linkIcon: 'flaticon-right'
        }
    ];
}

class SectionTitleContent {
    subTitle: string;
    title: string;
    paragraphText: string;
}

class ServicesBoxContent {
    icon: string;
    title: string;
    paragraphText: string;
    link: string;
    linkText: string;
    linkIcon: string;
}

class LoadMore {
    link: string;
    linkText: string;
    linkIcon: string;
}
