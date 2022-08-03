export interface Candidate {
    candidateId: number;
    fname: string;
    lname: string;
    username: string;
    password: string;
    email: string;
    phone:string;
    role: string; 
    qualification: string;
    skills: string;
    experience:string;
    resumeLink: string;

    //Candidate status
    status: string;

    //jobId
    jobId: number;
}
