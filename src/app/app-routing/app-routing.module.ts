import { Component, NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../views/home/home.component';
import { LoginComponent } from '../views/login/login.component';
import { UsersComponent } from '../views/users/users.component';
import { DelusrComponent } from '../views/delusr/delusr.component';
import { CreateusrComponent } from '../views/createusr/createusr.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"login", component: LoginComponent},
  {path:"users", component: UsersComponent},
  {path:"deluser", component: DelusrComponent},
  {path:"createuser", component: CreateusrComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
