import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Barber } from '../model/barber';
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class BarberService {

    endPointListar = 'http://localhost:8080/barberias/barberias';
    endPointEliminar = 'http://localhost:8080/barberias/';
    endPointInsertar = 'http://localhost:8080/barberias/barberia';
    endPointActualizar = 'http://localhost:8080/barberias/';

    HeaderJson = new HttpHeaders({'Content-type':'application/json'});
    HeaderText = new HttpHeaders({'Content-type':'text/plain'});

    constructor(private barber: HttpClient){}

    //barberia: Barber = new Barber();
    public barberiaSeleccionada: Barber= new Barber();

    listarBarberias(): Observable<Barber[]> {
        return this.barber.get<Barber[]>(this.endPointListar);
    }

    eliminarBarberia(id:number){
        return this.barber.delete<Barber>(this.endPointEliminar.concat(id.toString()).concat("/barberia"),{headers: this.HeaderText})
    }

    insertarBarberia(barberia: Barber): Observable<Barber>{
        return this.barber.post<Barber>(this.endPointInsertar, barberia, {headers: this.HeaderJson});
    }

    actualizarBarberia(barberia, id: number){
        return this.barber.put<Barber>(this.endPointActualizar.concat(id.toString()).concat("/barberia"), barberia, {headers: this.HeaderJson});
    }
}
