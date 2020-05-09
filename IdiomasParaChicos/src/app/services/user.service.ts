import { Injectable } from '@angular/core';
import { User } from '../classes/user';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: User;

  constructor(private afsAuth: AngularFireAuth) {

  }

  registerUser(value) {
    return new Promise<any>((resolve, reject) => {
      this.afsAuth.createUserWithEmailAndPassword(value.email, value.password)
        .then(
          res => resolve(res),
          err => reject(err))
    })
  }

  loginUser(value) {
    return new Promise<any>((resolve, reject) => {
      this.afsAuth.signInWithEmailAndPassword(value.email, value.password)
        .then(
          res => {
            console.log(res);
            resolve(res)
          },
          err => reject(err))
    })
  }

  logoutUser() {
    return new Promise((resolve, reject) => {
      if (this.afsAuth.currentUser) {
        this.afsAuth.signOut()
          .then(() => {
            console.log("Log Out");
            resolve();
          }).catch((error) => {
            reject();
          });
      }
    })
  }

  getCurrentUser() {
    return this.afsAuth.currentUser;
  }

  getAuthStateChanged() {
    return new Promise((resolve, reject) => {
      const unsubscribe = this.afsAuth.onAuthStateChanged(user => {
        resolve(user);
      }, reject);
    });
  }
}
