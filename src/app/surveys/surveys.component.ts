import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { Survey } from '../shared/survey';

@Component({
  selector: "app-surveys",
  templateUrl: "./surveys.component.html",
  styleUrls: ["./surveys.component.css"]
})
export class SurveysComponent implements OnInit {

  surveys = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getSurveys().subscribe(actionArray => {
      this.surveys = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...Object.assign({}, item.payload.doc.data())
        };
      })
    });
  }
}
