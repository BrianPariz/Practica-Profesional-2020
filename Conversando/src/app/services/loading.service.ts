import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { SweetAlertType } from '../models/enums/SweetAlertType';

@Injectable({
    providedIn: 'root'
})
export class LoadingService {

    private loading;

    constructor(private loadingCtrl: LoadingController, private router: Router) { }

    ngOnInit() {
    }

    async showLoading(message: string) {

        this.loadingCtrl.create({
            message
        }).then((overlay) => {
            this.loading = overlay;
            this.loading.present();
        });
    }

    closeLoading(title?: string, message?: string, typeNotification?: SweetAlertType) {
        setTimeout(() => {
            this.loading.dismiss();

            if (message) {
                Swal.fire({
                    icon: typeNotification,
                    title: title,
                    text: message,
                    backdrop: false
                });
            }
        }, 2000);
    }

    closeLoadingAndRedirect(route: string) {
        setTimeout(() => {
            this.loading.dismiss();
            this.router.navigate([route]);
        }, 2000);
    }

    redirectOnly(route: string) {
        this.router.navigate([route]);
    }
}