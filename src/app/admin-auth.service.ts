import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

const TOKEN_KEY:string = "jwt_token";
const USER_NAME:string = "jwt_user";

@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {

  
  url = "http://localhost:8080/authenticate";

  constructor(private http: HttpClient) { 

  }

  login(username:string, password:string) {
    console.log("about to make request")
    // this.http.post(this.url, {username, password})
    // .subscribe((response:any)=>{
    //   console.log("authenticated");
    //     this.saveToken(response.jwtToken);
    // })

    return this.http.post(this.url, {username, password})
          .pipe(tap((response:any) => {
            console.log("Authenticated")
            this.saveToken(response.jwtToken)
            this.saveUser(username)
          }))

  }
  private saveToken(token:string) {
    localStorage.setItem(TOKEN_KEY, token);
  }

  private saveUser(username:string) {
    localStorage.setItem(USER_NAME, username);
  }

  public getUser():string | null {
    return localStorage.getItem(USER_NAME);
  }

  isLoggedIn():boolean {
    return (this.getToken() !== null);
  }

  getToken(): string | null{
    return localStorage.getItem(TOKEN_KEY);
  }

  logout() {
    localStorage.removeItem(TOKEN_KEY);
  }

}
