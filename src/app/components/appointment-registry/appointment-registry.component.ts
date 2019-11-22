import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BarberService } from '../../service/barber-service';
import { AppointmentService } from '../../service/appointment-service';
import { Location } from '@angular/common';
import { Appointment } from '../../model/appointment';
import { Barber } from '../../model/barber';
import { User } from '../../model/user';
import { UserService } from 'src/app/service/user-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointment-registry',
  templateUrl: './appointment-registry.component.html',
  styleUrls: ['./appointment-registry.component.css']
})
export class AppointmentRegistryComponent implements OnInit {

  cita: Appointment = new Appointment();
  barberias: Barber[] = [];
  usuarios: User[] = [];
  

  constructor(private barberService : BarberService, private userService: UserService,
              private appointmentService: AppointmentService, private router: Router,
              private location: Location) { }

  ngOnInit() {
    this.barberService.listarBarberias().subscribe(
      (barberias) => {
        this.barberias = barberias;
      }
    );
    this.userService.listarUsuarios().subscribe(
      (usuarios) => {
        this.usuarios = usuarios;
      }
    );
  }

  nuevaCita(citaForm: NgForm) {
    this.appointmentService.insertarCita(citaForm.value).subscribe(
      _=> {
        location.reload();
      }
    )
  }

}
