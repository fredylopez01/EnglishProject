import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HistoryComponent } from './pages/history/history.component';
import { ImpactComponent } from './pages/impact/impact.component';
import { OpportunitiesComponent } from './pages/opportunities/opportunities.component';
import { EnglishRelationComponent } from './pages/english-relation/english-relation.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "history",
    component: HistoryComponent
  },
  {
    path: "impact",
    component: ImpactComponent
  },
  {
    path: "opportunities",
    component: OpportunitiesComponent
  },
  {
    path: "englishRelation",
    component: EnglishRelationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
