import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserData } from 'src/Model/UserData';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
 private initialUrl = "http://localhost:3000";
  constructor(private httpClient: HttpClient) { }

  sendData(data:UserData){
    return this.httpClient.post(this.initialUrl + '/items/addItem', data);
  }
  getData(name:string){
    return this.httpClient.get(this.initialUrl + `item/${name}`);
  }
}
