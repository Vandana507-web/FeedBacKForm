import { Component, Input, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from  '@angular/forms';

@Component({
  selector: 'app-que-five',
  templateUrl: './que-five.component.html',
  styleUrls: ['./que-five.component.css']
})
export class QueFiveComponent implements OnInit {
  @Input()form!: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
