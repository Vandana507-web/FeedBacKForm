import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpsProviderService } from 'src/app/service/https-provider.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

  @Input()form!: FormGroup;
  formSubmitted: boolean=false;
  data!:any;
  panelOpenState = true;

  constructor(private router: Router,
    public apiService: HttpsProviderService) { }

  ngOnInit(): void {
  }

  submit()
  {
    console.log(this.form.value);
    this.data={
      'id':6,
      'userName': this.form.get('personalDetail')!.get('userName')!.value,
      'email': this.form.get('personalDetail')!.get('email')!.value,
      'phoneno':this.form.get('personalDetail')!.get('phoneNo')!.value,
      'timeofinterview':this.form.get('queOne')!.get('qOne')!.value,
      'disussion':this.form.get('queTwo')!.get('qTwo')!.value,
      'posts':this.form.get('queThree')!.get('qThree')!.value,
      'topics':this.form.get('queFour')!.get('qFour')!.value,
      'notes':this.form.get('queFive')!.get('qFive')!.value,
}
this.apiService.create(this.data).subscribe(
  {
  next: (response) => {
     alert('saved')
     this.formSubmitted=true;
  },
  error: (error) => {

    alert(error)
      alert('There was an error in retrieving data from the server');
      this.formSubmitted=true;
  }
});
    }
    
  }


