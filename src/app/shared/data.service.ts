import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Survey } from './survey';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firestore: AngularFirestore) {

  }

  getOneSurvey(id: string) {
    return this.firestore.doc('surveys/' + id).get();
  }

  getSurveys() {
    return this.firestore.collection('surveys', ref => ref.orderBy('name', 'asc')).snapshotChanges();
  }

  addSurvey(data) {
    return this.firestore.collection('surveys').add(data);
  }
}
