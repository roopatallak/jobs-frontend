import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { CandidateEditComponent } from './candidate-edit/candidate-edit.component';
import { FormsModule } from '@angular/forms';
import { AddJobComponent } from './add-job/add-job.component';
import { AdminJobListComponent } from './admin-job-list/admin-job-list.component';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { JobstatusComponent } from './jobstatus/jobstatus.component';
import { ListViewComponent } from './admin-job-list/list-view/list-view.component';
import { DetailViewComponent } from './admin-job-list/detail-view/detail-view.component';


@NgModule({
  declarations: [
    AdminComponent,
    CandidateListComponent,
    CandidateEditComponent,
    AddJobComponent,
    AdminJobListComponent,
    AdminNavComponent,
    AdminLoginComponent,
    JobstatusComponent,
    ListViewComponent,
    DetailViewComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
