import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { HistoryComponent } from './pages/history/history.component';
import { EventCardComponent } from './components/event-card/event-card.component';
import { ImpactComponent } from './pages/impact/impact.component';
import { OpportunitiesComponent } from './pages/opportunities/opportunities.component';
import { EnglishRelationComponent } from './pages/english-relation/english-relation.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    HistoryComponent,
    EventCardComponent,
    ImpactComponent,
    OpportunitiesComponent,
    EnglishRelationComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
