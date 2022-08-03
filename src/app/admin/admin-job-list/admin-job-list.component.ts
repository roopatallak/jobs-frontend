import { Component, OnInit } from '@angular/core';
import { CandidateService } from 'src/app/candidate.service';
import { JobService } from 'src/app/job.service';
import { Job } from 'src/app/model/job';


@Component({
  selector: 'app-admin-job-list',
  templateUrl: './admin-job-list.component.html',
  styleUrls: ['./admin-job-list.component.scss']
})
export class AdminJobListComponent implements OnInit {

 selectedJob?: Job;

  jobs: Job[]=[];
  // cTable:boolean = false;
  rowsToShowCandidates = new Set<number>();

  constructor(private service: JobService) { }

  ngOnInit(): void {
    console.log("in Admin Job List")
    this.service.getJobs().subscribe(data => this.jobs=data);
  }

  toggleShowCandidate(jobId: number) {
    if (this.rowsToShowCandidates.has(jobId)) {
      this.rowsToShowCandidates.delete(jobId);
    } else {
      this.rowsToShowCandidates.add(jobId);
    }
  }

  shouldShowCandidates(jobId: number): boolean {
    return this.rowsToShowCandidates.has(jobId) 
  }


}
