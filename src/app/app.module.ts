import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireModule } from "@angular/fire";
import { environment } from "../environments/environment";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from "./navbar/navbar.component";
import { LandingpageComponent } from "./landingpage/landingpage.component";
import { AboutComponent } from "./about/about.component";
import { SuccessComponent } from "./success/success.component";
import { SurveyformComponent } from "./surveyform/surveyform.component";
import { SurveysComponent } from "./surveys/surveys.component";
import { SurveydetailComponent } from "./surveydetail/surveydetail.component";
import { DataService } from './shared/data.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingpageComponent,
    AboutComponent,
    SuccessComponent,
    SurveyformComponent,
    SurveysComponent,
    SurveydetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
