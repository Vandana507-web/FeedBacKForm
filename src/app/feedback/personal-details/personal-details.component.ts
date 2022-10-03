import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {


  @Input() form!:FormGroup;
    constructor() { }

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
