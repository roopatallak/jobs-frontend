import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCandidateComponent } from './add-candidate/add-candidate.component';
import { JobComponent } from './job/job.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ThanksPageComponent } from './thanks-page/thanks-page.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent},
  { path: 'thanks', component: ThanksPageComponent },
  { path: 'job-list', component: JobComponent },
  { path: 'apply/:id', component: AddCandidateComponent },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: '', component: WelcomeComponent},
  {path: '404', component: NotfoundComponent},
  {path: '**', redirectTo: '/404'}  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
