import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-portfolio-page',
    templateUrl: './portfolio-page.component.html',
    styleUrls: ['./portfolio-page.component.scss']
})
export class PortfolioPageComponent implements OnInit {

    constructor() {}

    ngOnInit(): void {}

    pageTitleArea: PageTitle[] = [
        {
            title: 'Portfolio'
        }
    ];

    sectionTitle: SectionTitleContent[] = [
        {
            subTitle: 'Our Work',
            title: 'Projects That Deliver Real Impact',
            paragraphText: 'A selection of the solutions we have built for businesses across Africa — explore by category.'
        }
    ];

    tabs: string[] = ['All', 'Data & AI', 'Web', 'Mobile'];
    activeTab = 'All';

    projects: ProjectItem[] = [
        {
            category: 'Data & AI',
            img: 'assets/img/projects/project1.jpg',
            title: 'Retail Demand Forecasting',
            subTitle: 'Data & AI',
            paragraphText: 'A machine-learning pipeline predicting stock demand across 40+ retail outlets, cutting overstock by 23%.'
        },
        {
            category: 'Web',
            img: 'assets/img/projects/project2.jpg',
            title: 'Customer Portal Platform',
            subTitle: 'Web',
            paragraphText: 'A secure self-service portal handling 50,000+ monthly users with real-time account management.'
        },
        {
            category: 'Mobile',
            img: 'assets/img/projects/project3.jpg',
            title: 'Field Services App',
            subTitle: 'Mobile',
            paragraphText: 'A low-bandwidth Android app enabling field agents to capture and sync data offline.'
        },
        {
            category: 'Data & AI',
            img: 'assets/img/projects/project4.jpg',
            title: 'Fraud Detection Engine',
            subTitle: 'Data & AI',
            paragraphText: 'Real-time anomaly detection flagging suspicious transactions with 94% precision.'
        },
        {
            category: 'Web',
            img: 'assets/img/projects/project5.jpg',
            title: 'Analytics Dashboard Suite',
            subTitle: 'Web',
            paragraphText: 'Interactive executive dashboards consolidating data from six internal systems into one view.'
        },
        {
            category: 'Mobile',
            img: 'assets/img/projects/project6.jpg',
            title: 'Community Health Tracker',
            subTitle: 'Mobile',
            paragraphText: 'A cross-platform app helping clinics track patient visits and medication schedules.'
        }
    ];

    switchTab(tab: string): void {
        this.activeTab = tab;
    }

    get filteredProjects(): ProjectItem[] {
        if (this.activeTab === 'All') {
            return this.projects;
        }
        return this.projects.filter(p => p.category === this.activeTab);
    }
}

class PageTitle {
    title: string;
}

class SectionTitleContent {
    subTitle: string;
    title: string;
    paragraphText: string;
}

class ProjectItem {
    category: string;
    img: string;
    title: string;
    subTitle: string;
    paragraphText: string;
}
