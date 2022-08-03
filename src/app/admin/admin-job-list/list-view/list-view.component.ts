import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Job } from 'src/app/model/job';


@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {

@Input() jobs: Job[] = [];
@Output() selectedJobEvent = new EventEmitter<Job>();

  constructor() { }

  ngOnInit(): void {
  }

  selectJob(myJob: Job) {
    this.selectedJobEvent.emit(myJob);
  }

}
