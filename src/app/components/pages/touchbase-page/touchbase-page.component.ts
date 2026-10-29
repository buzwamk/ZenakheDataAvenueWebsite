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
}

class PageTitle {
    title: string;
}
