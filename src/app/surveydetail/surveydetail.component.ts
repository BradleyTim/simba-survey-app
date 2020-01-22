import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Survey } from '../shared/survey';

@Component({
  selector: "app-surveydetail",
  templateUrl: "./surveydetail.component.html",
  styleUrls: ["./surveydetail.component.css"],
})
export class SurveydetailComponent implements OnInit {

  survey;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService
  ) {}

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get("id");
    this.dataService.getSurveys().subscribe(actionArray => {
      return this.survey = actionArray.filter(item => {
        if (item && id == item.payload.doc.id) {
          return this.survey = {
            id: item.payload.doc.id,
            ...Object.assign({}, item.payload.doc.data()),
          }
        }
      });
    });
  }

  onBack(): void {
    this.router.navigate(["/results"]);
  }
}
