import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Candidate } from 'src/app/model/candidate';
import { CandidateService } from 'src/app/candidate.service';
import { STATUSLIST } from 'src/app/model/commondefs';

@Component({
  selector: 'app-candidate-edit',
  templateUrl: './candidate-edit.component.html',
  styleUrls: ['./candidate-edit.component.scss']
})
export class CandidateEditComponent implements OnInit {
  candidate?: Candidate 
  selectedStatus = ""
  possibleStatuses = STATUSLIST;

  constructor(private route: ActivatedRoute, 
    private candidateService: CandidateService,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.candidateService.getCandidateById(id).subscribe((candidate) => {
        this.candidate = candidate
        this.selectedStatus = candidate.status
      })
    })
  }

  submit() {
    if (this.candidate === undefined) return
    this.candidateService.editCandidateStatus(this.candidate.candidateId, this.selectedStatus)
      .subscribe(() => {
        //alert(`Updated status to ${this.selectedStatus}`)
        //redirect here later maybe
         
        
      })

    let msgElement = document.getElementById("candidateStatusMsg");
    if (msgElement !== null) msgElement.innerText = "Candidate status has been updated"
      
  }

//reject candidate = delete
reject() {

  if (this.candidate === undefined) return
  this.candidateService.rejectCandidate(this.candidate.candidateId)
    .subscribe(() => {

     alert("Candidate removed")       
  
    })


    this.router.navigate(['/admin/candidates'])
        .then(() => {
          window.location.reload();
        });
}


  sendEmail() {
    this.candidateService.sendEmail();
    let msgElement = document.getElementById("emailStatusMsg");
    if (msgElement !== null) msgElement.innerText = "Email sent";
  }

  navBack() {
    this.router.navigate(['/admin/candidates'])
  }

}
