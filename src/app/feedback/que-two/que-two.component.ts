import { Component, OnInit,Input } from '@angular/core';
import {FormGroup} from  '@angular/forms';

@Component({
  selector: 'app-que-two',
  templateUrl: './que-two.component.html',
  styleUrls: ['./que-two.component.css']
})
export class QueTwoComponent implements OnInit {

  @Input()form !:FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

}
