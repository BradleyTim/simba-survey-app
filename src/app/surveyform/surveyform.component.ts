import { Component, OnInit } from '@angular/core';
import { Survey } from '../shared/survey';
import { DataService } from '../shared/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-surveyform',
  templateUrl: './surveyform.component.html',
  styleUrls: ['./surveyform.component.css']
})
export class SurveyformComponent implements OnInit {

  ageGroups: string[] = [
    '18 - 24',
    '25 - 35',
    '36 - 45',
    '46 - 65',
    'Over 65'
  ];

  rates: string[] = [
    'Worse',
    'Bad',
    'Average',
    'Good',
    'Excellent'
  ];

  getToKnowAboutUs: string[] = [
    'Internet',
    'Sales Agents',
    'Newspaper',
    'Referral from a friend',
    'Television',
  ];

  purchaseLocations: string[] = [
    'Headquaters at City Cabanas',
    'Through sales agents countrywide',
    'Through the internet',
    'I have not bought simba speed governot yet',
  ];

  angelsEyeUsages: string[] = [
    'All the Time',
    'Less than 3 times a day',
    'Less than 3 times a week',
    'Never used it',
  ];

  socials: string[] = [
    'Facebook',
    'Twitter',
    'LinkedIn',
    'Google',
    'Instagram',
    'Website',
    'Youtube'
  ];

  usageDurations: string[] = [
    'Less than a week',
    'Not more than 1 month',
    'One to Three months',
    'More than 3 months',
  ];

  customerServiceRates: string[] = [
    'Very satisfied',
    'Satisfied',
    'Neutral',
    'Dissatisfied',
    'Very Dissatisfied',
  ];

  notices: string[] = [
    'Yes',
    'No',
    'Not sure'
  ];

  recommendationOptions: string[] = [
    'Yes',
    'Maybe',
    'No',
  ];

  surveyAgainOptions: string[] = [
    'Yes',
    'Maybe',
    'No',
  ];

  survey: Survey = {
    id: '',
    name: '',
    email: '',
    howDidYougetToKnowUs: '',
    internet: '',
    usageDuration: '',
    rate: '',
    purchaseLocation: '',
    purchaseReason: '',
    angelsEye: '',
    issues: '',
    benefits: '',
    ageGroup: '',
    occupationAndImpact: '',
    customerService: '',
    suggestionsOnCustomerService: '',
    county: '',
    noticeOfBrand: '',
    suggestionsOnProductImprovememnt: '',
    nextProductOrService: '',
    wouldRecommend: '',
    wouldTakeSurveyAgain: '',
  };

  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    let data = Object.assign({}, this.survey);
    delete data.id;
    this.dataService.addSurvey(data);
    this.router.navigate(["/success"]);
  }

}
