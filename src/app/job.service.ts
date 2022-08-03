import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  baseUrl = 'http://localhost:8080'

  constructor(private http: HttpClient) { }

  // getJobStatus(): Observable<any> {
  //   return this.http.get<any[]>(this.baseUrl + '/jobStatus')
  // }

  postCandidateInfo(formData: FormData): void {
    this.http.post(this.baseUrl + '/addCandidate', formData)
      .subscribe(() => { })
  }

  getJobs(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + '/jobs')
  }


}
