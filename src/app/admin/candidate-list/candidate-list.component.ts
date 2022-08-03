import { Component, OnInit } from '@angular/core';
import { Candidate } from 'src/app/model/candidate';
import { CandidateService } from 'src/app/candidate.service';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.scss']
})


export class CandidateListComponent implements OnInit {
  candidates: Candidate[] = []
  skillsList: string[] = ['All', 'Java', 'ISTQB','Marketing', 'Testing'];
  skills = "";
  selectedSkill=""

  constructor(private candidateService: CandidateService) { }

  ngOnInit(): void {
    this.candidateService.getAllCandidates(this.skills)
      .subscribe(candidates => {
        this.candidates = candidates

      })
  }

  getResumeUrl(candidateId: number): string {
    return `http://localHost:8080/readFile/${candidateId}`
  }

  submit() {
    if (this.selectedSkill === 'All') {this.selectedSkill='';}

    console.log (this.selectedSkill)
      
    this.candidateService.getAllCandidates(this.selectedSkill)
      .subscribe((candidates) => {
        this.candidates = candidates
        //console.log("Candidates :"+candidates)
      })
    }

}
