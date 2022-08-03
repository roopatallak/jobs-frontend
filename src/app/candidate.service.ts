import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Candidate } from './model/candidate';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {
  baseUrl = "http://localhost:8080/admin"

  constructor(private http: HttpClient) { }

  getAllCandidates(skill:string): Observable<Candidate[]> {
    const url = `${this.baseUrl}/candidates?skills=${skill}`
    return this.http.get<Candidate[]>(url)
  }

  getCandidateById(id: number): Observable<Candidate> {
    const url = `${this.baseUrl}/candidate/${id}`
    return this.http.get<Candidate>(url)
  }

  rejectCandidate(id: number): Observable<string> {
    const url = `${this.baseUrl}/reject/${id}`
    return this.http.get<string>(url)
  }

  editCandidateStatus(candidateId: number, status: string) {
    const url = `${this.baseUrl}/updateCandidate`
    const formData = new FormData()
    formData.append('candidateId', `${candidateId}`)
    formData.append('status', status)
    return this.http.post(url, formData)
  }

  getJobStatus(): Observable<any> {
    return this.http.get<any[]>(this.baseUrl + '/jobStatus')
  }


  addNewJob(job : any) {
    let url = this.baseUrl + '/addJob';
    this.http.post(url, job).subscribe(()=>{
      alert("Job created")
    })
  }

  sendEmail() {
    let url = this.baseUrl + '/sendEmail';
    this.http.get(url).subscribe(() => {
      alert('Email sent')
    })
  }


  // getJobs(): Observable<any[]> {
  //   return this.http.get<any[]>(this.baseUrl + '/jobs')
  // }  

}
