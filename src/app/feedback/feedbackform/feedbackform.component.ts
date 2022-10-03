import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from  '@angular/forms';

@Component({
  selector: 'app-feedbackform',
  templateUrl: './feedbackform.component.html',
  styleUrls: ['./feedbackform.component.css']
})
export class FeedbackformComponent implements OnInit {

  feedBackForm! : FormGroup;

  constructor() { }

  ngOnInit(): void {

    this.feedBackForm = new FormGroup({
      'personalDetail': new FormGroup({
        'userName': new FormControl(null,Validators.required),
        'email': new FormControl (null,Validators.required),
        'phoneNo': new FormControl (null,Validators.required),

      }),

      'queOne': new FormGroup ({
        'qOne': new FormControl(null,Validators.required),

      }),

      'queTwo': new FormGroup({
        'qTwo': new FormControl(null,Validators.required) 
      }),
   
      'queThree': new FormGroup({
        'qThree': new FormControl(null, Validators.required)
      }),
      'queFour': new FormGroup({
        'qFour': new FormControl(null, Validators.required)
      }),
      'queFive': new FormGroup({
        'qFive': new FormControl(null, Validators.required)
      })


    });
  }

}
