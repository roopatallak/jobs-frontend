import { Component, OnInit } from '@angular/core';
import { CandidateService } from '../../candidate.service';
import { JobService } from '../../job.service';

@Component({
  selector: 'app-jobstatus',
  templateUrl: './jobstatus.component.html',
  styleUrls: ['./jobstatus.component.scss']
})
export class JobstatusComponent implements OnInit {

  jobStatus: any;

  constructor(private service:CandidateService) { }

  ngOnInit(): void {
    this.service.getJobStatus().subscribe(data => this.jobStatus=data);
  }

}
