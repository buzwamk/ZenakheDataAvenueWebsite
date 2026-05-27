import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-solutions',
    templateUrl: './solutions.component.html',
    styleUrls: ['./solutions.component.scss']
})
export class SolutionsComponent implements OnInit {

    constructor() {}

    ngOnInit(): void {}

    sectionTitle: SectionTitleContent[] = [
        {
            subTitle: 'What We Do',
            title: 'Technology Solutions Built for Africa',
            paragraphText: 'From raw data to real decisions — we build the tools that move your business forward.'
        }
    ];

    singleSolutionsBox: SolutionsBoxContent[] = [
        {
            icon: 'flaticon-rocket',
            title: 'Data Analytics & AI',
            paragraphText: 'Turn your data into a competitive advantage. We design analytics pipelines and AI models that surface insights you can act on.',
            link: 'services',
            linkText: 'View Details'
        },
        {
            icon: 'flaticon-laptop',
            title: 'Software Development',
            paragraphText: 'Custom web and mobile applications engineered for performance, scalability, and the real needs of your users.',
            link: 'services',
            linkText: 'View Details'
        },
        {
            icon: 'flaticon-money',
            title: 'Digital Transformation',
            paragraphText: 'We help businesses modernise operations, automate workflows, and build the digital infrastructure to compete in a connected world.',
            link: 'services',
            linkText: 'View Details'
        }
    ];
}

class SectionTitleContent {
    subTitle: string;
    title: string;
    paragraphText: string;
}

class SolutionsBoxContent {
    icon: string;
    title: string;
    paragraphText: string;
    link: string;
    linkText: string;
}
