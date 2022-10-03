import { Component, Input, OnInit } from '@angular/core';
import {FormGroup} from  '@angular/forms';

@Component({
  selector: 'app-que-three',
  templateUrl: './que-three.component.html',
  styleUrls: ['./que-three.component.css']
})
export class QueThreeComponent implements OnInit {

  @Input()form !:FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

}
