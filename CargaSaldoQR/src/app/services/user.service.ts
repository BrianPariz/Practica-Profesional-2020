import { Injectable } from '@angular/core';
import { auth } from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { User } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User;

  constructor(private afsAuth: AngularFireAuth) {
    this.afsAuth.authState.subscribe(user => {
      if (user)
        this.user = user;
      else
        this.user = null;
    })
  }

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
          res => resolve(res),
          err => reject(err))
    })
  }

  async logoutUser() {
    await this.afsAuth.signOut();
  }

  getCurrentUser() {
    return this.user;
  }

  getAuthStateChanged() {
    return new Promise((resolve, reject) => {
      this.afsAuth.onAuthStateChanged(user => {
        resolve(user);
      }, reject);
    });
  }
}