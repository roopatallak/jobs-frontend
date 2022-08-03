import { Candidate } from "./candidate"

export interface Job {

 jobId:number
 title:string
 description:string
 skills:string
 experience:string

 candidateList: Candidate[]
}
