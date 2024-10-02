import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { MainComponent } from './Components/main/main.component';
import { HeroComponent } from './Sections/hero/hero.component';
import { HeadingComponent } from './Subcomponents/heading/heading.component';
import { ServicesComponent } from './Sections/services/services.component';
import { StatisticsComponent } from './Sections/statistics/statistics.component';
import { RecommendationsComponent } from './Sections/recommendations/recommendations.component';
import { EduArticlesComponent } from './Sections/edu-articles/edu-articles.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AboutusComponent } from './Sections/about-us/aboutus.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    HeroComponent,
    HeadingComponent,
    ServicesComponent,
    StatisticsComponent,
    RecommendationsComponent,
    EduArticlesComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
