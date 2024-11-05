import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  lForm: FormGroup;

  loading: boolean = false;
  constructor(private router: Router, private authService: AuthService, private msgService: MessageService) {}

  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.lForm = this.authService.getLoginForm();
  }
  onSubmit() {
    if (this.lForm.valid) {
      var req = this.lForm.value;
      this.authService.login(req.email, req.password).subscribe({
        next: (res) => {
          console.log(res);
          if (res.activate && res.activate == false) {
            this.msgService.add({
              severity: 'success',
              detail: 'logged In Successfully!',
              summary: 'Done',
            });
          } else if (res.error || !res.token) {
            this.msgService.add({
              severity: 'error',
              detail: 'Please check in Email or Password !',
              summary: 'Some thing went Wrong',
            });
          } else {
            console.log('user', res);
            this.authService.setToken(res.token);
            this.authService.setCurrentUser(res.data[0]);
            this.authService.setUserObs(res.data[0]);
            this.msgService.add({
              severity: 'success',
              detail: 'logged In Successfully!',
              summary: 'Done',
            });
            this.router.navigate(['/home']);
            this.loading = false;
          }
        },
        error: (err) => {
          console.log('error ogin', err);
        },
      });
    }
  }
}
