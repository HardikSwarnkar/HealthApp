import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import Gender from '../../../../commons/gender'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  genders = Gender;

  ngOnInit(): void {
    
  }
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
    if (this.userForm.valid) {
      console.log('Form Submitted!');
    } else {
      console.log('Form is invalid');
    }
    console.log( this.userForm.value);
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
