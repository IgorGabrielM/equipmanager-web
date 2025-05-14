import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {environment} from '../environments/environments.dsv';
import {getAuth, provideAuth} from '@angular/fire/auth';
import {AuthService} from './data/serices/auth.service';
import {AsyncPipe, CommonModule} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    AsyncPipe,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
})
export class AppComponent {

  constructor(
    public auth: AuthService
  ) {}

  login() {
    this.auth.loginWithGoogle();
  }

  logout() {
    this.auth.logout();
  }
}
