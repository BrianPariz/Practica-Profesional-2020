import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UserService } from 'src/app/services/user.service';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { LoadingService } from 'src/app/services/loading.service';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  private credit: number;

  constructor(
    private barcodeScanner: BarcodeScanner,
    private userService: UserService,
    private firebaseService: FirebaseService,
    private toastController: ToastController,
    private loadingService: LoadingService,
    private storage: Storage) { }

  ngOnInit() {
    this.loadingService.showLoading("Cargando crédito..");
    this.userService.getAuthStateChanged().then((user: any) => {
      this.firebaseService.getObservableFromDocument("usersData", user.uid).subscribe((data: number) => {
        this.credit = data;
        this.loadingService.closeLoading();
      })
    });
  }

  scan() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.updateCredit(barcodeData.text.trim(), "qrs");
    }).catch(err => {
      console.log('Error', err);
    });
  }

  clean() {
    this.credit = 0;
    this.firebaseService.clearCollection("usedCharges");
    this.firebaseService.clearCollection("usersData");
    this.firebaseService.getAll("qrs").pipe(take(1)).subscribe((docs: Array<any>) => {
      docs.forEach(qr => {
        if(!qr.enabled) {
          this.firebaseService.update("qrs", qr.id, { "enabled": true });
        }
      })
    })
  }

  updateCredit(barcodeId: string, dataNombre: string) {
    let currentUser = this.userService.getCurrentUser();
    this.firebaseService.getOnce(dataNombre, barcodeId).then(async doc => {
      let validation = await this.validate(currentUser, doc);
      if (validation) {
        this.firebaseService.getOnce("usersData", currentUser.uid).then(async data => {
          let actualCredit = data.get("credit") || 0;
          let credit = actualCredit + doc.data().value;
          this.firebaseService.update(dataNombre, barcodeId, { "enabled": false });
          this.firebaseService.add("usedCharges", { "date": Date.now(), "user": currentUser.uid, "id": barcodeId });
          this.firebaseService.setDocument("usersData", currentUser.uid, "credit", credit);
          this.presentToast('Carga Realizada con Exito', "success");
        })
      } else {
        this.presentToast('Código QR no válido', "danger");
      }
    })
  }

  async presentToast(message, color) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: "middle",
      color: color
    });
    toast.present();
  }

  countCharges(uId) {
    return new Promise<any>((resolve) => {
      this.firebaseService.getAllWithQuery('usedCharges', ref => ref.where("user", "==", uId)).subscribe((docs: Array<any>) => {
        resolve(docs.length);
      })
    })
  }

  validate(currentUser, doc) {
    let currentUserProfilePromise = this.storage.get('profile');
    let chargesCountPromise = this.countCharges(currentUser.uid);
    let validationResult = Promise.all([currentUserProfilePromise, chargesCountPromise]).then(values => {
      let result = false;
      if (doc.exists && ((values[0] == "admin" && values[1] <= 1) ||
        (values[0] != "admin" && values[1] == 0) && doc.data().enabled == true)) {
        result = true;
      }
      return result;
    })
    return validationResult;
  }
}
