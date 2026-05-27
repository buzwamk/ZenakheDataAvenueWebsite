import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Layout
import { NavbarComponent } from './components/layouts/navbar/navbar.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { PreloaderComponent } from './components/layouts/preloader/preloader.component';

// Common
import { SolutionsComponent } from './components/common/solutions/solutions.component';
import { ProjectStartComponent } from './components/common/project-start/project-start.component';

// Homepage One
import { HomepageOneComponent } from './components/pages/homepage-one/homepage-one.component';
import { HomeoneBannerComponent } from './components/pages/homepage-one/homeone-banner/homeone-banner.component';
import { HomeoneServicesComponent } from './components/pages/homepage-one/homeone-services/homeone-services.component';
import { HomeoneAboutComponent } from './components/pages/homepage-one/homeone-about/homeone-about.component';

// About Page
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { AboutpageAboutComponent } from './components/pages/about-page/aboutpage-about/aboutpage-about.component';
import { AboutpageHistoryComponent } from './components/pages/about-page/aboutpage-history/aboutpage-history.component';

// Team Page
import { TeamPageComponent } from './components/pages/team-page/team-page.component';

// Services Page
import { ServicesPageComponent } from './components/pages/services-page/services-page.component';

// Contact Page
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';

// Error Page
import { ErrorPageComponent } from './components/pages/error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    PreloaderComponent,
    SolutionsComponent,
    ProjectStartComponent,
    HomepageOneComponent,
    HomeoneBannerComponent,
    HomeoneServicesComponent,
    HomeoneAboutComponent,
    AboutPageComponent,
    AboutpageAboutComponent,
    AboutpageHistoryComponent,
    TeamPageComponent,
    ServicesPageComponent,
    ContactPageComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
