import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-touchbase-page',
    templateUrl: './touchbase-page.component.html',
    styleUrls: ['./touchbase-page.component.scss']
})
export class TouchbasePageComponent implements OnInit {

    constructor() {}

    ngOnInit(): void {}

    pageTitleArea = [
        { title: 'Our Products' }
    ];

    products: Product[] = [
        {
            icon: 'flaticon-web',
            title: 'AI Website Generator',
            subtitle: 'Launch in minutes, not months',
            description: 'Generate a fully functional, responsive business website using AI. Just describe your business, select a style, and get a production-ready site with hosting — no coding required.',
            features: ['AI-powered design suggestions', 'Mobile responsive out of the box', 'Custom domain support', 'SEO optimised', 'Built-in analytics'],
            badge: 'AI Powered',
            badgeClass: 'badge-ai',
            buttonText: 'Start Building',
            buttonLink: '#',
            status: 'coming-soon'
        },
        {
            icon: 'flaticon-phone',
            title: 'Mobile App Builder',
            subtitle: 'Your business in every pocket',
            description: 'Create cross-platform mobile applications for your business. From customer portals to booking systems — build, preview, and publish Android and iOS apps without a development team.',
            features: ['Drag-and-drop builder', 'Push notifications', 'Offline support', 'Payment integration', 'App store submission'],
            badge: 'AI Powered',
            badgeClass: 'badge-ai',
            buttonText: 'Create Your App',
            buttonLink: '#',
            status: 'coming-soon'
        },
        {
            icon: 'flaticon-structure',
            title: 'Data Dashboard Builder',
            subtitle: 'See your data, make better decisions',
            description: 'Build dynamic or static business dashboards that connect to your data sources. Visualise KPIs, track performance, and share insights with your team — all in real time.',
            features: ['Connect any data source', 'Real-time updates', 'Drag-and-drop widgets', 'Share & embed anywhere', 'PDF export'],
            badge: 'Analytics',
            badgeClass: 'badge-data',
            buttonText: 'Build a Dashboard',
            buttonLink: '#',
            status: 'coming-soon'
        },
        {
            icon: 'flaticon-rocket',
            title: 'ZenfastAPI',
            subtitle: 'APIs that power your business',
            description: 'Spin up secure, scalable REST APIs in minutes. ZenfastAPI gives you instant backend infrastructure — authentication, database, file storage, and webhooks — so you can focus on your product.',
            features: ['Instant API generation', 'Built-in authentication', 'Auto-generated docs', 'Database included', 'Scalable infrastructure'],
            badge: 'Developer Tool',
            badgeClass: 'badge-dev',
            buttonText: 'Get Started',
            buttonLink: '#',
            status: 'coming-soon'
        }
    ];

    showcase: ShowcaseProject = {
        title: 'ZenSmart Movers',
        subtitle: 'Logistics & Delivery Management Platform',
        description: 'A full-stack logistics platform built for the South African home removal market. Connects customers, admin operators, and drivers through a single system with real-time tracking and analytics.',
        techStack: ['Angular 17', 'Node.js', 'Express', 'MySQL 8.0', 'Azure Cloud', 'Chart.js'],
        features: [
            'Multi-role authentication (Customer, Admin, Driver)',
            'Complete booking lifecycle with transactional driver assignment',
            'Public pricing engine (distance-based quoting)',
            'Admin analytics dashboard with live charts',
            'Google Maps route visualisation',
            'Audit logging for full operational accountability'
        ],
        liveUrl: 'https://zensmart-api-ergrareke3d8c0fc.southafricanorth-01.azurewebsites.net',
        image: 'assets/img/projects/zensmart-preview.png'
    };
}

class Product {
    icon: string;
    title: string;
    subtitle: string;
    description: string;
    features: string[];
    badge: string;
    badgeClass: string;
    buttonText: string;
    buttonLink: string;
    status: string;
}

class ShowcaseProject {
    title: string;
    subtitle: string;
    description: string;
    techStack: string[];
    features: string[];
    liveUrl: string;
    image: string;
}
