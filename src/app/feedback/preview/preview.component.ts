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

  constructor(private router: Router,
    public apiService: HttpsProviderService) { }

  ngOnInit(): void {
  }

  submit()
  {
    console.log(this.form.value);
    this.data={
      'userName': this.form.get('personalDetail')!.get('userName')!.value,
      'email': this.form.get('personalDetail')!.get('email')!.value,
      'phoneNo':this.form.get('personalDetail')!.get('phoneNo')!.value,
      'stepA':this.form.get('queOne')!.get('qOne')!.value,
      'stepB':this.form.get('queTwo')!.get('qTwo')!.value,
      'stepC':this.form.get('queThree')!.get('qThree')!.value,
      'stepD':this.form.get('queFour')!.get('qFour')!.value,
      'comments':this.form.get('queFive')!.get('qFive')!.value,
}

    this.apiService.create(this.data).subscribe(res => {
      console.log('Employee created!')
      this.router.navigateByUrl('/home')})
      this.formSubmitted=true;
    }
    
  }


