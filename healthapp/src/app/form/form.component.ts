import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlDirective, FormGroup, ReactiveFormsModule } from '@angular/forms'
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
        name : new FormControl(''),
        age : new FormControl(''),
        gender : new FormControl(''),
        weight : new FormControl(''),
        height : new FormControl('')
      }
    )
  }
  
  getFormData(){
    console.log(this.userForm.value);
  }
  

}
