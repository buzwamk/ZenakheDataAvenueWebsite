import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-aboutpage-about',
    templateUrl: './aboutpage-about.component.html',
    styleUrls: ['./aboutpage-about.component.scss']
})
export class AboutpageAboutComponent implements OnInit {

    constructor() {}

    ngOnInit(): void {}

    aboutImage: Image[] = [
        {
            img: 'assets/img/about/img1.svg'
        }
    ];

    aboutContent: Content[] = [
        {
            subTitle: 'About Us',
            title: 'Driving Digital Transformation Across Africa',
            paragraphText1: 'Zenakhe Digital Solutions is a Cape Town-based technology startup specialising in data analytics, AI, and custom software development. We exist to bridge the gap between cutting-edge technology and the businesses that need it most.',
            paragraphText2: 'Our team combines deep technical expertise with a genuine understanding of the African business landscape — delivering solutions that are practical, scalable, and built to last.'
        }
    ];

    featuresList: List[] = [
        {
            icon: 'assets/img/icon1.svg',
            title: '3+ Years',
            subTitle: 'In the market'
        },
        {
            icon: 'assets/img/icon2.svg',
            title: '5+',
            subTitle: 'Team members'
        },
        {
            icon: 'assets/img/icon3.svg',
            title: '100%',
            subTitle: 'Client satisfaction'
        },
        {
            icon: 'assets/img/icon4.svg',
            title: '80%',
            subTitle: 'Project success rate'
        }
    ];

    aboutText: Text[] = [
        {
            title: 'Our Story',
            paragraphText: 'Founded in 2020 in Cape Town, Zenakhe Digital Solutions was born from a belief that African businesses deserve world-class technology built with local context in mind.',
            featuresList1: 'Local expertise, global standards',
            featuresList2: 'Purpose-built for African markets',
            featuresList3: 'Agile and client-focused',
            featuresList4: 'Transparent and collaborative',
            icon: 'flaticon-tick'
        },
        {
            title: 'Our Mission',
            paragraphText: 'To empower South African businesses with intelligent software and data solutions that drive measurable growth, operational efficiency, and competitive advantage.',
            featuresList1: 'Data-driven decision making',
            featuresList2: 'Scalable, production-ready software',
            featuresList3: 'Honest, long-term partnerships',
            featuresList4: 'Continuous innovation',
            icon: 'flaticon-tick'
        }
    ];
}

class Image {
    img: string;
}

class Content {
    subTitle: string;
    title: string;
    paragraphText1: string;
    paragraphText2: string;
}

class List {
    icon: string;
    title: string;
    subTitle: string;
}

class Text {
    title: string;
    paragraphText: string;
    featuresList1: string;
    featuresList2: string;
    featuresList3: string;
    featuresList4: string;
    icon: string;
}
