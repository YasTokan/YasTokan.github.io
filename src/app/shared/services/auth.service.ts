import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// import { CookieService } from 'ngx-cookie-service';

import { JwtHelperService } from '@auth0/angular-jwt';

import { CookieService } from './cookie.service';
import { ConstantService } from './constant.service';
import { Config } from 'src/config';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from '../validators/custom-validators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser: any;
  currentUserObs: BehaviorSubject<any>;
  private _clientStatisticsObs: BehaviorSubject<any>;

  constructor(private http: HttpClient) {
    this.currentUser = this.getCurrentUser2();
   
   
    this.currentUserObs = !!this.currentUser
      ? new BehaviorSubject<any>(this.currentUser)
      : new BehaviorSubject<any>(null);
    this._clientStatisticsObs = new BehaviorSubject<any>(null);
  }

  public get currentUserValue() {
    return this.currentUser;
  }
  public getHeader(){

    let token = Config.getToken();
  
    let header = new HttpHeaders({ "Authorization": "Bearer "+token});
     
    return  { headers: header};
 
   }
  public  getCurrentUser2() {
    let c = localStorage.getItem(Config.storage_logged_user);

    if (!c || c == undefined) {
      return null;
    } else if (c != undefined) {
      console.log('n', c);
      return null;//JSON.parse(c);
    }
  }
  getClientStatisticsObs() {
    return this._clientStatisticsObs.asObservable();
  }
  set clientStatisticsObs(val: any) {
    this._clientStatisticsObs.next(val);
  }
  public login(email: string, password: string): Observable<any> {
    return this.http.post<any>(Config.appUrl + 'auth/client/login', { email: email, password: password });
  }

  signUp(req) {
    return this.http.post<any>(Config.appUrl + 'auth/client/signup', req, this.getHeader());
  }

  activateAccount(req) {
    return this.http.post<any>(Config.appUrl + 'auth/client/activate', req, this.getHeader());
  }
  checkOtp(req) {
    return this.http.post<any>(Config.appUrl + 'auth/client/checkOTP', req, this.getHeader());
  }
  delete(id) {
    return this.http.post<any>(Config.appUrl + 'auth/client/deleteUser', {id:id}, this.getHeader());
  }
  getCurrentUser(token: string): Promise<any[]> {
    let header = new HttpHeaders({
      Authorization: 'Bearer ' + token,
    });

    const requestOptions = {
      headers: header,
    };

    return this.http
      .get<any>(Config.appUrl + 'api/users/me/', requestOptions)
      .toPromise()
      .then((user) => {
        if (user && user.email) {
          localStorage.setItem(Config.storage_logged_user, JSON.stringify(user));
        }
        return user;
      });

    // .pipe(map(user => {
    //     if (user && user.email) {
    //         localStorage.setItem(Config.storage_logged_user, JSON.stringify(user));
    //     }
    //     return user;
    // }));
  }
  public tokenExpired(token: string) {
    const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
    return (Math.floor((new Date).getTime())) >= expiry;
   }
  public authenticated() {
    let loggedInUser = Config.getCurrentUser();
    let token = Config.getToken();

    if (loggedInUser != null && token != null) {
      const helper = new JwtHelperService();

      let decodedToken = helper.decodeToken(token);
      const isExpired = this.tokenExpired(token);
      //helper.isTokenExpired(token);

      if (decodedToken._id == loggedInUser._id && !isExpired) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  forgotPassword(email: any) {
    return this.http.post(Config.appUrl + 'auth/local/forgot', email);
  }

  logout() {
    // remove user from local storage to log user out
    Config.deleteToken();
    localStorage.removeItem(Config.storage_logged_user);
    this.currentUser = null;
    this.currentUserObs.next(null);
  }
  setUserObs(u: any) {
    this.currentUser = u;
    this.currentUserObs.next(u);
    Config.setCurrentUser(u);
  }
  getUserObs() {
    return this.currentUserObs.asObservable();
  }

  deleteUser(uid) {
    return this.http.delete<any>(Config.appUrl + 'auth/' + uid, this.getHeader());
  }

  getUsers() {
    return this.http.get<any>(Config.appUrl + 'auth/list', this.getHeader());
  }
  getCountries() {
    return this.http.get<any>('https://countriesnow.space/api/v0.1/countries/positions');
  }
  //Favs + searches
  getStatistics(idClient: string) {
    return this.http.post<any>(Config.appUrl + 'auth/client/getClient', { clientId: idClient }, this.getHeader());
  }
  // forgot pass
  sendForgotPass(data: any) {
    return this.http.post<any>(Config.appUrl + 'auth/client/requestResetPass', data, this.getHeader());
  }
  resetPass(data: any) {
    return this.http.post<any>(Config.appUrl + 'auth/client/resetPassword', data, this.getHeader());
  }
  getCreateAccountForm() {
    return new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      fName: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      lName: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      fullName: new FormControl(null),

      nationality: new FormControl(null,),
      phone: new FormControl(null),
      age: new FormControl(null),
      password: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      passwordCon:new FormControl(null, [Validators.required, Validators.minLength(3)]),

    },{
      validators: CustomValidators.passwordMatchValidator
    });
  }
  getOtpForm(email) {
    return new FormGroup({
      email: new FormControl(email),
     
      otp:new FormControl(null, Validators.required),

    },{
      validators: CustomValidators.passwordMatchValidator
    });
  }
  getLoginForm() {
    return new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }
  public  setCurrentUser(user: any) {
    localStorage.setItem(Config.storage_logged_user, JSON.stringify(user));
    this.currentUserObs.next(user);
  }
  public  setToken(token: string) {
    sessionStorage.setItem(Config.str_mrresta_token, token);
    localStorage.setItem(Config.str_mrresta_token, token);
  }

  public  getToken() {
    return sessionStorage.getItem(Config.str_mrresta_token);
  }

  public  deleteToken() {
    sessionStorage.removeItem(Config.str_mrresta_token);
  }
}
