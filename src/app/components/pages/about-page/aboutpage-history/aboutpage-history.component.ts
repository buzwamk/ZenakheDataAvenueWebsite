import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-aboutpage-history',
    templateUrl: './aboutpage-history.component.html',
    styleUrls: ['./aboutpage-history.component.scss']
})
export class AboutpageHistoryComponent implements OnInit {

    constructor() {}

    ngOnInit(): void {}

    sectionTitle: SectionTitleContent[] = [
        {
            subTitle: 'Our Journey',
            title: 'How We Got Here',
            paragraphText: 'From a small team with a big idea in Cape Town, to a growing startup delivering real impact for South African businesses — here is our story so far.'
        }
    ];

    historyTimeline: TimelineBlock[] = [
        {
            year: '2020',
            date: 'May 20',
            title: 'Founded in Cape Town',
            paragraphText: 'Zenakhe Digital Solutions was established with a mission to make enterprise-grade data and software solutions accessible to African businesses.',
            img: 'assets/img/history/img1.svg'
        },
        {
            year: '2022',
            date: 'January 14',
            title: 'First Product Launched',
            paragraphText: 'We shipped our first internal data analytics platform, validating our approach and laying the foundation for client-facing products.',
            img: 'assets/img/history/img2.svg'
        },
        {
            year: '2023',
            date: 'March 25',
            title: 'First Client Onboarded',
            paragraphText: 'We partnered with our first external client, delivering a custom analytics dashboard that reduced their reporting time by 60%.',
            img: 'assets/img/history/img3.svg'
        }
    ];
}

class SectionTitleContent {
    subTitle: string;
    title: string;
    paragraphText: string;
}

class TimelineBlock {
    year: string;
    date: string;
    title: string;
    paragraphText: string;
    img: string;
}
