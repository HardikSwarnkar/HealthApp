import { Injectable } from '@angular/core';
import { UserData } from 'src/Model/UserData';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userData = new UserData();
  constructor() {}

  getUserInitialData(userData:UserData){
    this.userData = userData;
  }
}
