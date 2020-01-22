import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuccessComponent } from './success/success.component';
import { SurveyformComponent } from './surveyform/surveyform.component';
import { SurveydetailComponent } from './surveydetail/surveydetail.component';
import { SurveysComponent } from './surveys/surveys.component';
import { AboutComponent } from './about/about.component';
import { LandingpageComponent } from './landingpage/landingpage.component';


const routes: Routes = [
  { path: "success", component: SuccessComponent },
  { path: "results/:id", component: SurveydetailComponent },
  { path: "survey", component: SurveyformComponent },
  { path: "results", component: SurveysComponent },
  { path: "about", component: AboutComponent },
  { path: "", component: LandingpageComponent },
  { path: "**", redirectTo: "", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
