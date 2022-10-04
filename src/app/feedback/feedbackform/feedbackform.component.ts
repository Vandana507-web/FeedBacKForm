import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators,FormBuilder} from  '@angular/forms';

@Component({
  selector: 'app-feedbackform',
  templateUrl: './feedbackform.component.html',
  styleUrls: ['./feedbackform.component.css']
})
export class FeedbackformComponent implements OnInit {


  myForm!: FormGroup;
 
  createForm() {
   this.myForm = this.fb.group({
      username: ['', Validators.required ]
   });
 }

  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  feedBackForm! : FormGroup;

  
  constructor(private fb:FormBuilder) { 
    this.createForm();
 
  }
  form: FormGroup = new FormGroup({});  
 

  ngOnInit(): void {




    
    this.feedBackForm = new FormGroup({
      'personalDetail': new FormGroup({
        'userName': new FormControl(null,[Validators.required]),
        'email': new FormControl (null,[Validators.required,Validators.email]),
       'phoneNo': new FormControl (null,[Validators.required,Validators.pattern(("^((\\+91-?)|0)?[0-9]{10}$"))]),

      }),


     /* this.feedBackForm = this.formBuilder.group({
        userName: ['', Validators.required],
       
        email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
        phoneNo: ['', [Validators.required, Validators.minLength(6)]]
    }),*/

    //this.feedBackForm = new FormGroup({

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
      }),
     
      

    });
    
  }


}