import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Survey } from './survey';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firestore: AngularFirestore) {

  }

  getSurveys() {
    return this.firestore.collection('surveys').snapshotChanges();
  }

  addSurvey(data) {
    return this.firestore.collection('surveys').add(data);
  }
}
