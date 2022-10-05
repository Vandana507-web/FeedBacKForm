import { Component, Input, OnInit } from '@angular/core';
import {FormGroup} from  '@angular/forms';
import { SharedServiceService } from 'src/app/service/shared-service.service';

@Component({
  selector: 'app-que-four',
  templateUrl: './que-four.component.html',
  styleUrls: ['./que-four.component.css']
})
export class QueFourComponent implements OnInit {

  @Input() form !:FormGroup;
  topicList!: string[];

  constructor(private shareedSerice: SharedServiceService) { }

  ngOnInit(): void {
    
  }

  loadRepsonse()
  {
    this.topicList =this.shareedSerice.topics;
  }

}
