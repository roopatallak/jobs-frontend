import { Component, Input, OnInit } from '@angular/core';
import { Job } from 'src/app/model/job';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.scss']
})
export class DetailViewComponent implements OnInit {

  @Input() job?: Job;

  constructor() { }

  ngOnInit(): void {
  }

}
