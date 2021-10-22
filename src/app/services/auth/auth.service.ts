import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: BehaviorSubject<boolean>

  constructor() {
    this.token = new BehaviorSubject<boolean>(false);
  }

  login(user: string | undefined, password: string | undefined): Promise<void | string> {
    return new Promise<void | string>(
      (res, rej) => {
        setTimeout(() => {
          if (user === 'Administrateur' && password === 'azerty') {
            res();
            this.token.next(true)
            console.log('connexion')
          } else {
            rej('Identifiants incorrects');
          }
        }, 400);
      }
    );
  }
  logout(): Promise<void> {
    return new Promise<void>(
      (res, rej) => {
        this.token.next(false);
        res();
      }
    );
  }
}
