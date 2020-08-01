import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

const firebase = {
  apiKey: 'AIzaSyA7YfcZ3vhudl748Tvp1dO7JmzCgp0l8kY',
  authDomain: 'online-shop-3d2e0.firebaseapp.com',
  databaseURL: 'https://online-shop-3d2e0.firebaseio.com',
  projectId: 'online-shop-3d2e0',
  storageBucket: 'online-shop-3d2e0.appspot.com',
  messagingSenderId: '740199127586',
  appId: '1:740199127586:web:b4b68710181b0b53eb087b',
  measurementId: 'G-R2GL9784P5',
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebase),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
