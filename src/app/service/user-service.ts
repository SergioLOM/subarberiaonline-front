import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    endPointListar = 'http://localhost:8080/usuarios/usuarios';
    endPointEliminar = 'http://localhost:8080/usuarios/';
    endPointInsertar = 'http://localhost:8080/usuarios/usuario';
    endPointActualizar = 'http://localhost:8080/usuarios/';

    HeaderJson = new HttpHeaders({'Content-type':'application/json'});
    HeaderText = new HttpHeaders({'Content-type':'text/plain'});

    constructor(private user: HttpClient){}

    public usuarioSeleccionado: User = new User();

    listarUsuarios(): Observable<User[]> {
        return this.user.get<User[]>(this.endPointListar);
    }

    eliminarUsuario(id:number){
        return this.user.delete<User>(this.endPointEliminar.concat(id.toString()).concat("/usuario"),{headers: this.HeaderText})
    }

    insertarUsuario(usuario: User): Observable<User>{
        return this.user.post<User>(this.endPointInsertar, usuario, {headers: this.HeaderJson});
    }

    actualizarUsuario(usuario, id: number){
        return this.user.put<User>(this.endPointActualizar.concat(id.toString()).concat("/usuario"), usuario, {headers: this.HeaderJson});
    }
}
