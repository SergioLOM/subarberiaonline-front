import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user'
import { UserService } from 'src/app/service/user-service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  usuarios: User[] = [];
  usuarioSeleccionado: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.listarUsuarios().subscribe(
      usuarios => {
          this.usuarios = usuarios;
      }
    );
  }

  showModal(usuario: User){
    this.usuarioSeleccionado = usuario;
  }

  eliminarUsuario(id: number){
    this.userService.eliminarUsuario(id).subscribe(
      _=>{
        this.usuarios=this.usuarios.filter(
          usuario => usuario != this.usuarioSeleccionado
        );
      }
    )
  }

}
