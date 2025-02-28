import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import Gender from '../../../../commons/gender'
import { UserService } from '../../Service/user.service'
import { UserData } from 'src/Model/UserData';
import { NgxUiLoaderService } from "ngx-ui-loader";
import { ToastService } from 'angular-toastify';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  genders = Gender;

  ngOnInit(): void {
    
  }

  constructor(private userService:UserService, private ngxService: NgxUiLoaderService, private _toasterService: ToastService){}

  userForm = new FormGroup(
    {
      name : new FormControl('',[Validators.required,Validators.minLength(2)]),
      age : new FormControl(0,[Validators.required,Validators.min(1)]),
      gender : new FormControl('',[Validators.required,Validators.minLength(2)]),
      weight : new FormControl(0,[Validators.required,Validators.min(10)]),
      height : new FormControl(0,[Validators.required,Validators.min(50)])
    }
  )

  getFormData(){
    this.ngxService.start();
    
    if (this.userForm.valid) {
      const userData = new UserData();
      userData.Name = this.userForm.value.name
      userData.Age = this.userForm.value.age
      userData.Gender = this.userForm.value.gender
      userData.Weight = this.userForm.value.weight
      userData.Height = this.userForm.value.height
      this.userService.getUserInitialData(userData);
      setTimeout(() => {
        this.ngxService.stop(); 
        this._toasterService.success("Information stored successfully");
      }, 4000);

    } else {
      setTimeout(() => {
        this.ngxService.stop(); 
        this._toasterService.error("All fields are required and must be valid");
      }, 2000);
      console.log('Form is invalid');
    }
  }
  
  get Name(){
    return this.userForm.get("name");
  }
  get Age(){
    return this.userForm.get("age");
  }
  get Gender(){
    return this.userForm.get("gender");
  }
  get Weight(){
    return this.userForm.get("weight");
  }
  get Height(){
    return this.userForm.get("height");
  }

}
