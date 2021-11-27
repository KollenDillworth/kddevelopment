import { AnimationBuilder, AnimationPlayer } from '@angular/animations';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { workItemData } from '../models/work-item-data';
import { WorkItemModel } from '../models/work-item-model';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  workItems: WorkItemModel = workItemData;
  @ViewChild('carousel')
  private carousel!: ElementRef<any>;
  private player!: AnimationPlayer;
  
  constructor(private builder: AnimationBuilder) { }

  ngOnInit(): void {

  }



}
