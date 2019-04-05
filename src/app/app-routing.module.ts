import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplatesComponent } from './templates/templates.component';
import {Form1Component} from './form1/form1.component';
import {Form2Component} from './form2/form2.component';
import{HomeComponent} from './home/home.component';
import {ProfileComponent} from './profile/profile.component';

const routes: Routes = [
  {path: 'templates', component: TemplatesComponent},
  { path:'form1', component:Form1Component},
  {path :'profile', component:ProfileComponent},
  {path :'form2', component:Form2Component},
  {path:'**',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
