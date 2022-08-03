import { Component, OnInit } from '@angular/core';
import { CandidateService } from 'src/app/candidate.service';
import { EXPERIENCE_LIST } from 'src/app/model/commondefs';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.scss']
})
export class AddJobComponent implements OnInit {

  jsonJob = {
    title: "",
    description: "",
    skills: "",
    experience:""
  };
  experienceList = EXPERIENCE_LIST;

  constructor(private service: CandidateService) { }

  ngOnInit(): void {
  }

  submit() {
    this.service.addNewJob(this.jsonJob);
  }



}
