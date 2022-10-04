import { Component, Input, OnInit } from '@angular/core';
import { FormGroup ,FormControl, Validators ,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  title = 'email-validation-tutorial';
  myForm!: FormGroup;
 
  createForm() {
   this.myForm = this.fb.group({
      username: ['', Validators.required ]
   });
 }
formBuilder !:FormBuilder

feedBackForm! : FormGroup;
  @Input() form!:FormGroup;
    constructor(private fb:FormBuilder) { 
      this.createForm();
    }

  ngOnInit(): void {
    
  }

step1Submit(){
  this.form.get('personalDetail')!.get('userName')!.markAllAsTouched;
  this.form.get('personalDetail')!.get('userName')!.updateValueAndValidity;
  this.form.get('personalDetail')!.get('email')!.markAllAsTouched;
  this.form.get('personalDetail')!.get('email')!.updateValueAndValidity;
  this.form.get('personalDetail')!.get('phoneNo')!.markAllAsTouched;
  this.form.get('personalDetail')!.get('phoneNo')!.updateValueAndValidity;

}

}
