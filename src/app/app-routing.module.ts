import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageOneComponent } from './components/pages/homepage-one/homepage-one.component';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { TeamPageComponent } from './components/pages/team-page/team-page.component';
import { ServicesPageComponent } from './components/pages/services-page/services-page.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { ErrorPageComponent } from './components/pages/error-page/error-page.component';

const routes: Routes = [
    { path: '', component: HomepageOneComponent },
    { path: 'about-us', component: AboutPageComponent },
    { path: 'team', component: TeamPageComponent },
    { path: 'services', component: ServicesPageComponent },
    { path: 'contact', component: ContactPageComponent },
    { path: '**', component: ErrorPageComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
