import { Injectable } from '@angular/core';
import { HttpHeaders  } from '@angular/common/http';
import { Config } from 'src/config';

@Injectable({
  providedIn: 'root'
})
export class ConstantService {

  constructor() { }

  public getHeader(){

   let token = Config.getToken();
 
   let header = new HttpHeaders({ "Authorization": "Bearer "+token});
    
   return  { headers: header};

  }

  public getCustomHeader(_header:any){

   let token = Config.getToken();

   _header["Authorization"] = "Bearer "+token;

   

   let header = new HttpHeaders(_header);

   return  { headers: header};

  }

  public getHeaderUserId(){

    let app_id = Config.getSelectedApplication();
    let user = Config.getCurrentUser();
    return  { headers: new HttpHeaders({ "u_id":user._id,"app_id" : app_id})};

  }

  public getHeaderDelLang(lang_id){

    let app_id = Config.getSelectedApplication();
    let user = Config.getCurrentUser();
    return  { headers: new HttpHeaders({ "u_id":user._id,"app_id" : app_id,"language_id":lang_id})};
  }

  public getBaseUrl(){
  	return Config.appUrl;
  }

  public tokenExpired(token: string) {
  const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
  return (Math.floor((new Date).getTime())) >= expiry;
 }


   public getSlug(str:string):string{
       if(str){
           return str.replace(/\s+/g, '-').toLowerCase();
       }else{
         return '';
       }

  }


}
