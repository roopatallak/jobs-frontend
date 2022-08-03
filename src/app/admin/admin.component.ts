import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminAuthService } from '../admin-auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {


  username="";
  password="";

  constructor(private service: AdminAuthService, private router: Router) { }

  ngOnInit(): void {
  }

  submit() {
    this.service.login(this.username, this.password).subscribe(()=> {
      //alert("logged in");
      this.router.navigate(["/admin/candidates"])
    })
  }

}
