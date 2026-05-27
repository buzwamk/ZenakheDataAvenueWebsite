import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-project-start',
    templateUrl: './project-start.component.html',
    styleUrls: ['./project-start.component.scss']
})
export class ProjectStartComponent implements OnInit {

    constructor() {}

    ngOnInit(): void {}

    projectStartImage: Image[] = [
        {
            img: 'assets/img/project-start1.svg'
        }
    ];

    projectStartContent: Content[] = [
        {
            title: 'Ready to Build Something Great?',
            paragraphText: 'Let\'s talk about your project. We\'ll help you find the right solution and get moving fast.',
            defaultBtnIcon: 'flaticon-web',
            defaultBtnText: 'Start a Conversation',
            defaultBtnLink: 'contact'
        }
    ];
}

class Image {
    img: string;
}

class Content {
    title: string;
    paragraphText: string;
    defaultBtnIcon: string;
    defaultBtnText: string;
    defaultBtnLink: string;
}
