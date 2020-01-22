import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Survey } from '../shared/survey';
import { Observable } from 'rxjs';

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
    let id = this.route.snapshot.paramMap.get('id');
    this.survey = this.dataService.getOneSurvey(id).subscribe(item => {
      console.log(item.id);
      return {
        id: item.id,
        ...Object.assign({}, item.data()),
      }
    });
  }

  onBack(): void {
    this.router.navigate(["/results"]);
  }
}
