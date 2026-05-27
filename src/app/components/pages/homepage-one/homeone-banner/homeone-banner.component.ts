import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-homeone-banner',
    templateUrl: './homeone-banner.component.html',
    styleUrls: ['./homeone-banner.component.scss']
})
export class HomeoneBannerComponent implements OnInit {

    constructor() {}

    ngOnInit(): void {}

    mainBannerContent: Content[] = [
        {
            title: 'Data-Driven Solutions for South African Businesses',
            paragraphText: 'We help startups and enterprises unlock growth through intelligent software, data analytics, and AI — built right here in South Africa.',
            videoBtnIcon: 'flaticon-google-play',
            videoBtnText: 'Watch Our Story',
            videoBtnLink: 'https://www.youtube.com/watch?v=Y5KCDWi7h9o'
        }
    ];
}

class Content {
    title: string;
    paragraphText: string;
    videoBtnIcon: string;
    videoBtnText: string;
    videoBtnLink: string;
}
