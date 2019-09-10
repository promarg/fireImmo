import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB7pGNinxypns0Kep2iICLvEQvavTRXm5s",
  authDomain: "masuperagence-25168.firebaseapp.com",
  databaseURL: "https://masuperagence-25168.firebaseio.com",
  projectId: "masuperagence-25168",
  storageBucket: "",
  messagingSenderId: "803911892237",
  appId: "1:803911892237:web:c5cfd68fdea4ad80b88444"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  }
}
