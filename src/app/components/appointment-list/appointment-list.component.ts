import { Component, OnInit } from '@angular/core';
import { Appointment } from '../../model/appointment';
import { Barber } from 'src/app/model/barber';
import { AppointmentService } from '../../service/appointment-service';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {

  citas: Appointment[] =[];

  barberiaSeleccionada: Barber = new Barber();

  constructor() { }



  ngOnInit() {
  }

}
