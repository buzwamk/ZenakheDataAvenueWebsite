import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-about-page',
    templateUrl: './about-page.component.html',
    styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    pageTitleArea: pageTitle[] = [
        {
            title: 'About Us'
        }
    ]

}
class pageTitle {
    title : string;
}