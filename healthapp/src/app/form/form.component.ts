import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import Gender from '../../../commons/gender'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  userForm: any
  genders = Gender;

  ngOnInit(): void {
    this.userForm = new FormGroup(
      {
        name : new FormControl('',[Validators.required,Validators.minLength(2)]),
        age : new FormControl(0,[Validators.required,Validators.min(1)]),
        gender : new FormControl('',[Validators.required,Validators.minLength(2)]),
        weight : new FormControl(0,[Validators.required,Validators.min(10)]),
        height : new FormControl(0,[Validators.required,Validators.min(50)])
      }
    )
  }

  getFormData(){
    if (this.userForm.valid) {
      console.log('Form Submitted!');
    } else {
      console.log('Form is invalid');
    }
    console.log( this.userForm.value);
  }
  

}
