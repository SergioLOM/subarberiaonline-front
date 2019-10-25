import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Barber } from '../model/barber';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class BarberService {

    endPointListar = 'http://localhost:8080/barberias/barberias';
    endPointEliminar = 'http://localhost:8080/barberias/';

    HeaderJson = new HttpHeaders({'Content-type':'application/json'});
    HeaderText = new HttpHeaders({'Content-type':'text/plain'});

    constructor(private barber: HttpClient){}

    listarBarberias(): Observable<Barber[]> {
        return this.barber.get<Barber[]>(this.endPointListar);
    }

    eliminarBarberia(id:number){
        return this.barber.delete<Barber>(this.endPointEliminar.concat(id.toString()).concat("/barberia"),{headers: this.HeaderText})
    }
}
