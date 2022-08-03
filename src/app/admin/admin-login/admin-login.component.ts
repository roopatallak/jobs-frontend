import { Component, OnInit } from '@angular/core';
import { AdminAuthService } from 'src/app/admin-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  
  username="";
  password="";
  errormsg="Invalid login. Please try again";

  constructor(private service: AdminAuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    if (this.username==="" || this.password==="") {
//      alert("Username or password cannot be blank");
    }
    else {
    this.service.login(this.username, this.password).subscribe({
      next: (v) => this.router.navigate(["/admin/candidates"]),
      error: (e) => this.handleError(),
      complete: () => console.log("complete")
    })
    
  }

  }

  handleError() {
    let element = document.getElementById("errordiv");
    if (element)
      element.innerText=this.errormsg;
  }
}