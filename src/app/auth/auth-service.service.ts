import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import * as auth0 from 'auth0-js';

(window as any).global = window;

@Injectable()
export class AuthServiceService {

  auth0 = new auth0.WebAuth({
    clientID: 'tBq1RMClXmT8etw8cDE5AmBus64DUgnK',
    domain: 'ost.auth0.com',
    responseType: 'token id_token',
    redirectUri: 'https://localhost:3000/callback',
    scope: 'openid'
  });

  constructor(public router: Router) {}

  public login(): void {
    this.auth0.authorize();
  }

}
