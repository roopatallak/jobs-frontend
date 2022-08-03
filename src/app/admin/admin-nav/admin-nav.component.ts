import { Component, OnInit } from '@angular/core';
import { element } from 'angular';
import { AdminAuthService } from 'src/app/admin-auth.service';

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.scss']
})
export class AdminNavComponent implements OnInit {

  // username = "";
  welcomemsg = "";

  constructor(private service: AdminAuthService) { }

  ngOnInit(): void {
  }

  logout() {
    this.service.logout();
  }

  shouldShowLogin() {
    return !this.service.isLoggedIn()
  }

  getWelcomeMsg():string {
    if (this.service.getUser() !== null ) {
      this.welcomemsg = "Welcome " + this.service.getUser();
    }
    return this.welcomemsg;
  }

}
