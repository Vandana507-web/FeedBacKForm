import { Component, OnInit ,Input} from '@angular/core';
import {FormGroup} from  '@angular/forms';

@Component({
  selector: 'app-que-one',
  templateUrl: './que-one.component.html',
  styleUrls: ['./que-one.component.css']
})
export class QueOneComponent implements OnInit {

  @Input() form !:FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

}
