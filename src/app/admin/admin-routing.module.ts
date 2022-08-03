import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobstatusComponent } from './jobstatus/jobstatus.component';
import { AddJobComponent } from './add-job/add-job.component';
import { AdminComponent } from './admin.component';
import { CandidateEditComponent } from './candidate-edit/candidate-edit.component';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { AdminJobListComponent } from './admin-job-list/admin-job-list.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminGuard } from '../admin.guard';
import { NotfoundComponent } from '../notfound/notfound.component';

const routes: Routes = [
  { path: 'candidates', component: CandidateListComponent, canActivate:[AdminGuard] },
  { path: 'edit-candidate/:id', component: CandidateEditComponent, canActivate:[AdminGuard] },
  { path: 'add-job', component: AddJobComponent, canActivate:[AdminGuard] },
  { path: 'status', component: JobstatusComponent, canActivate:[AdminGuard] },
   { path: 'admin-job', component:AdminJobListComponent, canActivate:[AdminGuard] },
   { path: 'admin-login', component:AdminLoginComponent},
  { path: '', component: AdminComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
