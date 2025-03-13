import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserData } from 'src/Model/UserData';
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }

  private userData = new BehaviorSubject<UserData>({
    Name : "",
    Age : 0,
    Gender : "",
    Height : 0,
    Weight : 0,
    AdditionalInfo : ""
  })

  userData$ = this.userData.asObservable();   

  setUserData(data:UserData){
    this.userData.next(data);
  }

  getUserData() : UserData{
    return this.userData.value;
  }
}
