import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})

export class AuthComponent implements OnInit {
  errMsg: string | undefined;
  user: string | undefined;
  password: string | undefined;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmitAuthForm() {

    this.authService
      .login(this.user, this.password)
      .then(() => {
        this.router.navigateByUrl('home')
      })
      .catch((errMsg: string) => {
        this.errMsg = errMsg;
      });

  }
}
