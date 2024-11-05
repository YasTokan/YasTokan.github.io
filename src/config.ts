import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { environment } from './environments/environment';

@Injectable()
export class Config {
  public static langSubject: BehaviorSubject<any> = new BehaviorSubject({
    _id: '5ff829824de6c7a455721c58',
    name: 'English',
    shortCode: null,
    /*  "flag": "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg",
          "rtl": false,
          "checked": true */
  });

  /*  public static appUrl = environment.apiUrl; */
  public static appUrl = environment.apiUrl;

  public static storage_logged_user = 'currentUserWebsite';
  public static str_mrresta_token = 'mrresta_token';
  public static mrresta_selectedApp = 'mrresta_selectedApp';
  public static str_selected_filterItem = 'str_selected_filterItem';
  public static str_selected_app = 'str_selected_app';
  public static str_selected_activity = 'str_selected_activity';
  public static str_selected_slide = 'str_selected_slide';
  public static str_selected_slide1 = 'str_selected_slide1';
  public static str_selected_Menu = 'str_selected_Menu';
  public static str_selected_Location = 'str_selected_Location';
  public static str_selected_Product = 'str_selected_Product';
  public static str_selected_Event = 'str_selected_Event';
  public static str_selected_subCategory = 'str_selected_subCategory';
  public static str_selected_Category = 'str_selected_Category';
  public static str_selected_Item = 'str_selected_Item';
  public static str_current_role = '_r';
  public static str_user_language = 'str_user_language';
  public static str_filter = 'str_filter';
  public static str_media_option = 'str_media_option';

  public static hideThemeOptions = false;

  public static current_user_subject: BehaviorSubject<any> = new BehaviorSubject(null);
  public static str_checked = 'str_checked';
  static str_ParentFilterItem: string = 'str_ParentFilterItem';

  public static setMediaOption(activity: any) {
    sessionStorage.setItem(Config.str_media_option, JSON.stringify(activity));
  }

  public static getMediaOption() {
    return JSON.parse(sessionStorage.getItem(Config.str_media_option));
  }

  public static setSelectedMenu(activity: any) {
    sessionStorage.setItem(Config.str_selected_Menu, JSON.stringify(activity));
  }

  public static getSelectedMenu() {
    return JSON.parse(sessionStorage.getItem(Config.str_selected_Menu));
  }

  public static setFilter(activity: any) {
    sessionStorage.setItem(Config.str_filter, JSON.stringify(activity));
  }

  public static getFilter() {
    return JSON.parse(sessionStorage.getItem(Config.str_filter));
  }

  public static getRole(aa?) {
    let s = Config.getCurrentUser().role;
    if (s == 0) {
      return 'Super Admin';
    } else if (s == 1) {
      return 'Admin';
    } else if (s == 2) {
      return 'Editor';
    } else {
      return 'Translator';
    }
  }

  public static getCurrentRoleSubject() {
    let s;
    this.current_user_subject.subscribe((res: any) => {
      if (res && res.role) {
        return Config.getRole(res.role);
      } else {
        if (Config.getCurrentUserSubject() && Config.getCurrentUserSubject().role) {
          return Config.getRole(res.role);
        } else {
          return Config.getRole(4);
        }
      }
    });
    /*  if (s == 0) {
             return "Super Admin"
         } else if (s == 1) {
             return "Admin"
         } else if (s == 2) {
             return "Editor"
         } else {
             return "Translator"
         } */
  }

  public static setParentFilterItem(activity: any) {
    sessionStorage.setItem(Config.str_ParentFilterItem, JSON.stringify(activity));
  }

  public static getParentFilterItem() {
    return JSON.parse(sessionStorage.getItem(Config.str_ParentFilterItem));
  }

  public static setChecked(activity: any) {
    sessionStorage.setItem(Config.str_checked, JSON.stringify(activity));
  }

  public static getChecked() {
    return JSON.parse(sessionStorage.getItem(Config.str_checked));
  }

  public static setSelectedFilter(activity: any) {
    sessionStorage.setItem(Config.str_selected_Event, JSON.stringify(activity));
  }

  public static getSelectedFilter() {
    return JSON.parse(sessionStorage.getItem(Config.str_selected_Event));
  }

  public static setSelectedProduct(activity: any) {
    sessionStorage.setItem(Config.str_selected_Product, JSON.stringify(activity));
  }

  public static getSelectedProduct() {
    return JSON.parse(sessionStorage.getItem(Config.str_selected_Product));
  }

  public static setSelectedLocation(activity: any) {
    sessionStorage.setItem(Config.str_selected_Location, JSON.stringify(activity));
  }

  public static getSelectedLocation() {
    return JSON.parse(sessionStorage.getItem(Config.str_selected_Location));
  }

  public static setSelectedSlide(activity: any) {
    sessionStorage.setItem(Config.str_selected_slide, JSON.stringify(activity));
  }

  public static getSelectedSlide() {
    return JSON.parse(sessionStorage.getItem(Config.str_selected_slide));
  }
  public static setSelectedSlide1(activity: any) {
    sessionStorage.setItem(Config.str_selected_slide1, JSON.stringify(activity));
  }

  public static getSelectedSlide1() {
    return JSON.parse(sessionStorage.getItem(Config.str_selected_slide1));
  }
  /*
   */
  /*  public static setSelectedFilterItem(app_id) {
           sessionStorage.setItem(Config.str_selected_filterItem, app_id);
       };

       public static getSelectedFilterItem() {
           return JSON.parse(sessionStorage.getItem(Config.str_selected_filterItem));
       }; */
  /*
   */
  public static setSelectedFilterItem(activity: any) {
    sessionStorage.setItem(Config.str_selected_filterItem, JSON.stringify(activity));
  }

  public static getSelectedFilterItem() {
    return JSON.parse(sessionStorage.getItem(Config.str_selected_filterItem));
  }

  public static getCurrentUserSubject() {
    let s: any = Config.current_user_subject.asObservable();
    if (s) {
      if (s.source && s.source._value) {
        return s.source._value;
      } else {
        return Config.getCurrentUser();
      }
    }
  }

  public static setUserLanguage(language) {
    sessionStorage.setItem(Config.str_user_language, language);
  }

  public static getUserLanguage() {
    return sessionStorage.getItem(Config.str_user_language);
  }

  public static setSelectedApplication(app_id) {
    sessionStorage.setItem(Config.mrresta_selectedApp, app_id);
  }

  public static getSelectedApplication() {
    return sessionStorage.getItem(Config.mrresta_selectedApp);
  }

  public static setCurrentUser(user: any) {
    localStorage.setItem(Config.storage_logged_user, JSON.stringify(user));
    this.current_user_subject.next(user);
  }
  public static logOut() {
    localStorage.removeItem(Config.storage_logged_user);
    this.current_user_subject.next(null);
  }

  public static getCurrentUser() {
    let c = localStorage.getItem(Config.storage_logged_user);

    if (!c || c == undefined) {
      return null;
    } else if (c != undefined) {
      console.log('n', c);
      return JSON.parse(c);
    }
  }

  public static setSelectedActivity(activity: any) {
    sessionStorage.setItem(Config.str_selected_activity, JSON.stringify(activity));
  }

  public static getSelectedActivity() {
    return JSON.parse(sessionStorage.getItem(Config.str_selected_activity));
  }

  public static setSelectedItem(Category: any) {
    sessionStorage.setItem(Config.str_selected_Category, JSON.stringify(Category));
  }

  public static getSelectedItem() {
    return JSON.parse(sessionStorage.getItem(Config.str_selected_Category));
  }

  public static setSelectedCategory(Category: any) {
    sessionStorage.setItem(Config.str_selected_Category, JSON.stringify(Category));
  }

  public static getSelectedCategory() {
    return JSON.parse(sessionStorage.getItem(Config.str_selected_Category));
  }

  public static setSelectedSubCategory(SubCategory: any) {
    sessionStorage.setItem(Config.str_selected_subCategory, JSON.stringify(SubCategory));
  }

  public static getSelectedSubCategory() {
    return JSON.parse(sessionStorage.getItem(Config.str_selected_subCategory));
  }

  public static setCurrentSupplier(supplier: any) {
    sessionStorage.setItem('current_supplier', JSON.stringify(supplier));
  }

  public static getCurrentSupplier() {
    return JSON.parse(sessionStorage.getItem('current_supplier'));
  }

  public static setToken(token: string) {
    sessionStorage.setItem(Config.str_mrresta_token, token);
    localStorage.setItem(Config.str_mrresta_token, token);
  }

  public static getToken() {
    return sessionStorage.getItem(Config.str_mrresta_token);
  }

  public static deleteToken() {
    sessionStorage.removeItem(Config.str_mrresta_token);
  }

  public static getAppUrl() {
    return Config.appUrl;
  }

  public static setCurrentApp(application: any) {
    sessionStorage.setItem(Config.str_selected_app, JSON.stringify(application));
  }

  public static getCurrentApp() {
    return JSON.parse(sessionStorage.getItem(Config.str_selected_app));
  }

  public static setCurrentRole(role: string) {
    return sessionStorage.setItem(Config.str_current_role, role);
  }

  public static getCurrentRole() {
    return sessionStorage.getItem(Config.str_current_role);
  }

  public static clearStorage() {
    sessionStorage.removeItem('current_supplier');
    sessionStorage.removeItem(Config.str_selected_Menu);
    sessionStorage.removeItem(Config.str_selected_Category);
    sessionStorage.removeItem(Config.str_selected_Event);
    sessionStorage.removeItem(Config.str_selected_Location);
    sessionStorage.removeItem(Config.str_selected_Product);
    sessionStorage.removeItem(Config.str_selected_activity);
    sessionStorage.removeItem(Config.str_selected_slide);
    sessionStorage.removeItem(Config.str_selected_subCategory);
    sessionStorage.removeItem(Config.str_checked);
    sessionStorage.removeItem(Config.str_filter);
    sessionStorage.removeItem(Config.str_selected_Category);
    sessionStorage.removeItem('current_category');

    /* this.setSelectedMenu(null) */
    /*  this.setFilter(null)
         this.setChecked(null)
         this.setSelectedEvent(null)
         this.setSelectedProduct(null)
         this.setSelectedLocation(null)
         this.setSelectedSlide(null)
         this.setSelectedActivity(null)
         this.setSelectedSubCategory(null) */
  }
}
