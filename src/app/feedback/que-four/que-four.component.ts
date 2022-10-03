import { Component, Input, OnInit } from '@angular/core';
import {FormGroup} from  '@angular/forms';

@Component({
  selector: 'app-que-four',
  templateUrl: './que-four.component.html',
  styleUrls: ['./que-four.component.css']
})
export class QueFourComponent implements OnInit {

  @Input() form !:FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.topicList =this.softwareList;
  }

  topicList :string[] =[];
  softwareList :string[]=['Forntend','Backend','DataBase','CI/CD','Azure'];
  researchList :string[]=['Areas of research','Data processing','Data analysis','People Management','Time Management'];


}
