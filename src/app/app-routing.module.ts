import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserFindComponent } from './components/user-find/user-find.component';
import { UserRegistryComponent } from './components/user-registry/user-registry.component';
import { BarberListComponent } from './components/barber-list/barber-list.component';
import { BarberFindComponent } from './components/barber-find/barber-find.component';
import { BarberRegistryComponent } from './components/barber-registry/barber-registry.component';
import { AppointmentListComponent } from './components/appointment-list/appointment-list.component';
import { AppointmentFindComponent } from './components/appointment-find/appointment-find.component';
import { AppointmentRegistryComponent } from './components/appointment-registry/appointment-registry.component';



const routes: Routes = [
  {path: 'appointment-find', component: AppointmentFindComponent},
  {path: 'appointment-registry', component: AppointmentRegistryComponent},
  {path: 'appointment-list', component: AppointmentListComponent},
  {path: 'barber-find', component: BarberFindComponent},
  {path: 'barber-registry', component: BarberRegistryComponent},
  {path: 'barber-list', component: BarberListComponent},
  {path: 'user-find', component: UserFindComponent},
  {path: 'user-registry', component: UserRegistryComponent},
  {path: 'user-list', component: UserListComponent},
  {path: 'home', component: HomeComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
