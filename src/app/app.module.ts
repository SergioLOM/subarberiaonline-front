import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { BarberListComponent } from './components/barber-list/barber-list.component';
import { BarberFindComponent } from './components/barber-find/barber-find.component';
import { BarberRegistryComponent } from './components/barber-registry/barber-registry.component';
import { UserFindComponent } from './components/user-find/user-find.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserRegistryComponent } from './components/user-registry/user-registry.component';
import { AppointmentFindComponent } from './components/appointment-find/appointment-find.component';
import { AppointmentListComponent } from './components/appointment-list/appointment-list.component';
import { AppointmentRegistryComponent } from './components/appointment-registry/appointment-registry.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    BarberListComponent,
    BarberFindComponent,
    BarberRegistryComponent,
    UserFindComponent,
    UserListComponent,
    UserRegistryComponent,
    AppointmentFindComponent,
    AppointmentListComponent,
    AppointmentRegistryComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
