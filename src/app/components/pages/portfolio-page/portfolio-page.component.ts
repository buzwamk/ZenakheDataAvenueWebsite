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
            title: 'Projects We Are Proud Of',
            paragraphText: 'Real solutions we have delivered for our clients — from websites and booking platforms to mobile training apps.'
        }
    ];

    tabs: string[] = ['All', 'Web', 'Mobile'];
    activeTab = 'All';

    projects: ProjectItem[] = [
        {
            category: 'Web',
            img: 'assets/img/projects/touchbase-web.svg',
            title: 'TouchBase Foundation Website',
            subTitle: 'Web',
            paragraphText: 'A modern, responsive website for TouchBase Foundation — showcasing their mission and programmes with a clean, accessible design.'
        },
        {
            category: 'Web',
            img: 'assets/img/projects/tafeni-travel.svg',
            title: 'Tafeni Travel & Tourism Platform',
            subTitle: 'Web',
            paragraphText: 'A website and online booking platform for Tafeni Travelling Company, letting customers browse destinations and book travel and tourism experiences in one place.'
        },
        {
            category: 'Mobile',
            img: 'assets/img/projects/wbho-elearning.svg',
            title: 'WBHO Construction e-Learning App',
            subTitle: 'Mobile',
            paragraphText: 'A mobile e-learning app for WBHO Construction, delivering environmental and safety training to new and existing employees across their construction sites.'
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
