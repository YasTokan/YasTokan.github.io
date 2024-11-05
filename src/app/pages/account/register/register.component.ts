import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Config } from 'src/config';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  loading: boolean = false;
  sForm: FormGroup;
  step: number = 1;
  oForm: FormGroup;
  constructor(private router: Router, private AuthService: AuthService, private msgService: MessageService) {}

  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.sForm = this.AuthService.getCreateAccountForm();
    /*  this.AuthService.delete('66e816da7e8c2ced89f4b889').subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      },
    }); */
  }
  onSubmit() {
    if (this.sForm.valid) {
      var req = this.sForm.value;
      req.fullName = req.fName + ' ' + req.lName;
      this.AuthService.signUp(req).subscribe(
        (res) => {
          console.log(res);
          this.msgService.add({
            severity: 'success',
            detail: 'Sign Up Successfully!',
            summary: 'Done',
          });
          if (res.error) {
            /* this.showError("Error", "Error Happend") */
          } else {
            //Config.setToken(res.token);
            Config.setCurrentUser(res.data[0]);
            this.msgService.add({
              severity: 'success',
              detail: 'Sign Up Successfully!',
              summary: 'Done',
            });
            //this.router.navigate(['/home']);
            this.oForm = this.AuthService.getOtpForm(req.email);
            this.step = 2;
          }
        },
        (err) => {
          this.loading = false;
          console.log(err);
          this.msgService.add({
            severity: 'error',
            detail: 'Sign Up Successfully!',
            summary: 'Done',
          });
        }
      );
    }
  }
  onSubmitOTP() {
    if (this.oForm.valid) {
      var req = this.oForm.value;

      this.AuthService.checkOtp(req).subscribe({
        next: (res) => {
          console.log(res);
          
          if (res.error) {
            /* this.showError("Error", "Error Happend") */
          } else {
            Config.setToken(res.token);
            Config.setCurrentUser(res.data);
            this.msgService.add({
              severity: 'success',
              detail: 'Account Activated!',
              summary: 'Done',
            });
            this.router.navigate(['/pages/login']);
          }
        },
        error: (err) => {
          this.loading = false;
          console.log(err);
          this.msgService.add({
            severity: 'error',
            detail: 'Sign Up Successfully!',
            summary: 'Done',
          });
        },
      });
    }
  }
}
