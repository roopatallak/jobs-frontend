import { HttpClient, HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { JobService } from '../job.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {

  jobs:any;

  constructor(private service: JobService) { }

  ngOnInit(): void {
    this.service.getJobs().subscribe(data => this.jobs=data);
  }

}
