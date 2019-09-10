import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminSigninComponent } from './admin/admin-signin/admin-signin.component'


const routes: Routes = [
  { path: 'admin/login', component: AdminSigninComponent }
];

//La liste des route que l'on retrouvera dans l'url et qui sera activé grace au routerLink

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


