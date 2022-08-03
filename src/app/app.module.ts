import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobComponent } from './job/job.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JobstatusComponent } from './admin/jobstatus/jobstatus.component';
import { FormsModule } from '@angular/forms';
import { AddCandidateComponent } from './add-candidate/add-candidate.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CandidateListComponent } from './admin/candidate-list/candidate-list.component';
import { CandidateEditComponent } from './admin/candidate-edit/candidate-edit.component';
import { AdminJobListComponent } from './admin/admin-job-list/admin-job-list.component';
import { AddJobComponent } from './admin/add-job/add-job.component';
import { ThanksPageComponent } from './thanks-page/thanks-page.component';
import { AdminJwtInterceptor } from './admin-jwt.interceptor';
import { MainNavComponent } from './main-nav/main-nav.component';
import { NotfoundComponent } from './notfound/notfound.component';


@NgModule({
  declarations: [
    AppComponent,
    JobComponent,
    AddCandidateComponent,
    WelcomeComponent,
    ThanksPageComponent,
    MainNavComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ 
    { provide: HTTP_INTERCEPTORS, useClass: AdminJwtInterceptor, multi: true },
  ],  bootstrap: [AppComponent]
})
export class AppModule { }
