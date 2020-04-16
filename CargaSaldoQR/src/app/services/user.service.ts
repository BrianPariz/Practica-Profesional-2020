import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private afsAuth: AngularFireAuth) { }

  registerUser(email, password) {
    return new Promise<any>((resolve, reject) => {
      this.afsAuth.createUserWithEmailAndPassword(email, password)
        .then(
          res => resolve(res),
          err => reject(err))
    })
  }

  loginUser(email, password) {
    return new Promise<any>((resolve, reject) => {
      this.afsAuth.signInWithEmailAndPassword(email, password)
        .then(
          res => { resolve(res) },
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
        // unsubscribe();
        resolve(user);
      }, reject);
    });
  }
}