import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobService } from '../job.service';
import { EXPERIENCE_LIST, QUALIFICATIONS } from '../model/commondefs';

@Component({
  selector: 'app-add-candidate',
  templateUrl: './add-candidate.component.html',
  styleUrls: ['./add-candidate.component.scss']
})
export class AddCandidateComponent implements OnInit {


  id= -1
  resumeFile: File | undefined

  formData = {
    fname: "",
    lname: "",
    email: "",
    phone:"",
    skills: "",
    qualification: "",
    experience: ""
  }

 qualifications = QUALIFICATIONS;
 experienceList = EXPERIENCE_LIST;

  constructor(
    private route: ActivatedRoute,
    private jobService: JobService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log(params)
      this.id = params['id'];
    });
  }

  submit() {
    const formData = new FormData()

    // for (const key in this.formData) {
    //   if (this.formData[key as keyof typeof this.formData].length === 0) {
    //     alert('Make sure you fill out all fields!')
    //     return
    //   }
    //   formData.append(key, this.formData[key as keyof typeof this.formData])
    // }
    formData.append("candidatedetails", JSON.stringify(this.formData))

    formData.append("jobId", `${this.id}`)

    if (this.resumeFile === undefined) {
      alert('File not uploaded!')
      return
    }
    formData.append("resume", this.resumeFile, this.resumeFile?.name)

    this.jobService.postCandidateInfo(formData)
    this.router.navigate(['/thanks'])
  }

  handleFileChange(event: Event) {
    const files = (event.target as HTMLInputElement).files
    if (files === null) return;
    if (files.length > 0) {
      const file = files.item(0)
      if (file === null) {
        return
      }
      this.resumeFile = file
      console.log(file)
    }
  }
}
