import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  private credit: number;

  constructor(private barcodeScanner: BarcodeScanner, private userService: UserService, private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.userService.getAuthStateChanged().then((user: any) => {
      this.firebaseService.getObservableFromDocument("usersData", user.uid).subscribe((data: number) => {
        this.credit = data;
      })
    });
  }

  scan() {
    this.barcodeScanner.scan().then(barcodeData => {
      debugger;
      console.log('Barcode data', barcodeData);
    }).catch(err => {
      debugger;
      console.log('Error', err);
    });
  }
}
