import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent implements OnInit {

    constructor() {}

    ngOnInit(): void {
    }

    errorContent: Content[] = [
        {
            img: 'assets/img/error.png',
            title: 'Error 404 : Page Not Found',
            paragraphText: 'The page you are looking for might have been removed had its name changed or is temporarily unavailable.',
            goBackBtnIcon: 'flaticon-history',
            goBackBtnText: 'Go Back',
            BackToHomeBtnIcon: 'flaticon-earth-day',
            BackToHomeBtnText: 'Homepage'
        }
    ]

}
class Content {
    img : string;
    title: string;
    paragraphText: string;
    goBackBtnIcon: string;
    goBackBtnText: string;
    BackToHomeBtnIcon: string;
    BackToHomeBtnText: string;
}