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

  survey: Survey;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService
  ) {}

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.dataService.getOneSurvey(id).subscribe(item => {
      return this.survey = {
        id: item.id,
        ...Object.assign({}, item.data()),
      } as Survey;
    });
  }

  onBack(): void {
    this.router.navigate(["/results"]);
  }
}
