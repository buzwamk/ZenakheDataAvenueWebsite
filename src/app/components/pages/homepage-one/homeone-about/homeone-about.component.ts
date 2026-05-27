import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-homeone-about',
    templateUrl: './homeone-about.component.html',
    styleUrls: ['./homeone-about.component.scss']
})
export class HomeoneAboutComponent implements OnInit {

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
            title: 'A South African tech startup building solutions that matter.',
            paragraphText1: 'Zenakhe Digital Solutions was founded in Cape Town with a clear purpose: to make enterprise-grade technology accessible to African businesses of all sizes.',
            paragraphText2: 'We combine deep technical expertise with an understanding of the local market to deliver software and data solutions that create real, measurable impact.',
            defaultBtnIcon: 'flaticon-right',
            defaultBtnText: 'More About Us',
            defaultBtnLink: 'about-us'
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
}

class Image {
    img: string;
}

class Content {
    subTitle: string;
    title: string;
    paragraphText1: string;
    paragraphText2: string;
    defaultBtnIcon: string;
    defaultBtnText: string;
    defaultBtnLink: string;
}

class List {
    icon: string;
    title: string;
    subTitle: string;
}
