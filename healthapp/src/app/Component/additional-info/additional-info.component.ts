import { Component , OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/data-service.service';
import { UserData } from 'src/Model/UserData';
import { Router } from '@angular/router';
@Component({
  selector: 'app-additional-info',
  templateUrl: './additional-info.component.html',
  styleUrls: ['./additional-info.component.css']
})
export class AdditionalInfoComponent {
  userData : UserData = {};
  additionalInfo : string = "";
 constructor(private dataService: DataServiceService, private route: Router){}
 
 ngOnInit(){
  this.userData = this.dataService.getUserData();
  console.log(this.userData);
 }

 storeValue(){
  this.userData.AdditionalInfo = this.additionalInfo;
  this.dataService.setUserData(this.userData);
  this.additionalInfo = "";
  console.log(this.dataService.getUserData());
  this.route.navigate(['/Response']);
 }
  

}
