import { Component, Input, OnInit } from '@angular/core';
import {FormGroup} from  '@angular/forms';
import { SharedServiceService } from 'src/app/service/shared-service.service';

@Component({
  selector: 'app-que-three',
  templateUrl: './que-three.component.html',
  styleUrls: ['./que-three.component.css']
})
export class QueThreeComponent implements OnInit {

  @Input()form !:FormGroup;
  constructor(private shareedSerice: SharedServiceService) { }

  ngOnInit(): void {
  }

  ngOnchange(event:any)
  {

    this.shareedSerice.topics=[];
    this.shareedSerice.applied=event;
    if(this.shareedSerice.applied==='Software Engineering')
    this.shareedSerice.topics=this.shareedSerice.softwareList;
    else if(this.shareedSerice.applied==='Research Engineering')
    this.shareedSerice.topics=this.shareedSerice.researchList;
    else
    this.shareedSerice.topics=[];
  }

}
