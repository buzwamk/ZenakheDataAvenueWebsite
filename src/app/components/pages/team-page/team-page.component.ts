import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-team-page',
    templateUrl: './team-page.component.html',
    styleUrls: ['./team-page.component.scss']
})
export class TeamPageComponent implements OnInit {

    constructor() {}

    ngOnInit(): void {}

    pageTitleArea: PageTitle[] = [
        {
            title: 'Our Team'
        }
    ];

    singleScientistBox: ScientistBoxContent[] = [
        {
            img: 'assets/img/scientist/img1.svg',
            title: 'Mkhululi Buzwa',
            designation: 'Principal Developer & Co-Founder',
            facebookLink: '#',
            facebookIcon: 'bx bxl-facebook',
            twitterLink: '#',
            twitterIcon: 'bx bxl-twitter',
            instagramLink: '#',
            instagramIcon: 'bx bxl-instagram',
            linkedinLink: '#',
            linkedinIcon: 'bx bxl-linkedin'
        },
        {
            img: 'assets/img/scientist/img2.svg',
            title: 'Yalezo Ntsikelelo',
            designation: 'Chief Data Scientist',
            facebookLink: '#',
            facebookIcon: 'bx bxl-facebook',
            twitterLink: '#',
            twitterIcon: 'bx bxl-twitter',
            instagramLink: '#',
            instagramIcon: 'bx bxl-instagram',
            linkedinLink: '#',
            linkedinIcon: 'bx bxl-linkedin'
        }
    ];
}

class PageTitle {
    title: string;
}

class ScientistBoxContent {
    img: string;
    title: string;
    designation: string;
    facebookLink: string;
    facebookIcon: string;
    twitterLink: string;
    twitterIcon: string;
    instagramLink: string;
    instagramIcon: string;
    linkedinLink: string;
    linkedinIcon: string;
}
