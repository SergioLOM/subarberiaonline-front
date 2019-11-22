import {Barber} from '../model/barber';
import { Injectable } from '@angular/core';
import {Appointment} from '../model/appointment';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AppointmentService {

    endPointInsertar = 'http://localhost:8080/citas/cita';

    HeaderJson = new HttpHeaders({'Content-type':'application/json'});
    HeaderText = new HttpHeaders({'Content-type':'text/plain'});

    cita: Observable<any>;

    constructor(private appointment: HttpClient){}

    insertarCita(cita: Appointment): Observable<Appointment> {
        return this.appointment.post<Appointment>(this.endPointInsertar, cita, {headers: this.HeaderJson});
    }
}
