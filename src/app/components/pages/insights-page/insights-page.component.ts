import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-insights-page',
    templateUrl: './insights-page.component.html',
    styleUrls: ['./insights-page.component.scss']
})
export class InsightsPageComponent implements OnInit {

    constructor() {}

    ngOnInit(): void {}

    pageTitleArea: PageTitle[] = [
        {
            title: 'Insights'
        }
    ];

    sectionTitle: SectionTitleContent[] = [
        {
            subTitle: 'From Our Team',
            title: 'Ideas, Trends & Technical Insights',
            paragraphText: 'Perspectives on data, AI, and building technology for African markets.'
        }
    ];

    tabs: string[] = ['All', 'Data & AI', 'Engineering', 'Business'];
    activeTab = 'All';

    articles: ArticleItem[] = [
        {
            category: 'Data & AI',
            img: 'assets/img/blog/blog1.svg',
            date: 'March 12, 2026',
            author: 'Zenakhe Team',
            title: 'Why Low-Bandwidth AI Matters for African Businesses',
            paragraphText: 'Designing machine-learning products that perform well on constrained connections is a competitive advantage, not an afterthought.'
        },
        {
            category: 'Engineering',
            img: 'assets/img/blog/blog2.svg',
            date: 'February 28, 2026',
            author: 'Zenakhe Team',
            title: 'Building Resilient Data Pipelines on a Budget',
            paragraphText: 'Practical patterns for ingestion, validation, and recovery that keep your analytics running without enterprise spend.'
        },
        {
            category: 'Business',
            img: 'assets/img/blog/blog3.svg',
            date: 'February 10, 2026',
            author: 'Zenakhe Team',
            title: 'A Practical Roadmap to Digital Transformation',
            paragraphText: 'How to prioritise automation and modernisation so each step pays for the next.'
        },
        {
            category: 'Data & AI',
            img: 'assets/img/blog/blog4.svg',
            date: 'January 22, 2026',
            author: 'Zenakhe Team',
            title: 'Turning Raw Data Into Decisions Executives Trust',
            paragraphText: 'The difference between a dashboard that looks good and one that actually changes behaviour.'
        },
        {
            category: 'Engineering',
            img: 'assets/img/blog/blog5.svg',
            date: 'January 8, 2026',
            author: 'Zenakhe Team',
            title: 'Choosing the Right Stack for a Cross-Platform App',
            paragraphText: 'Trade-offs between native, hybrid, and web approaches for products targeting both Android and iOS.'
        },
        {
            category: 'Business',
            img: 'assets/img/blog/blog6.svg',
            date: 'December 15, 2025',
            author: 'Zenakhe Team',
            title: 'Measuring ROI on Analytics Investments',
            paragraphText: 'A simple framework for proving the value of your data initiatives to stakeholders.'
        }
    ];

    switchTab(tab: string): void {
        this.activeTab = tab;
    }

    get filteredArticles(): ArticleItem[] {
        if (this.activeTab === 'All') {
            return this.articles;
        }
        return this.articles.filter(a => a.category === this.activeTab);
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

class ArticleItem {
    category: string;
    img: string;
    date: string;
    author: string;
    title: string;
    paragraphText: string;
}
