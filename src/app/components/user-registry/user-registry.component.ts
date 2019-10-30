import { Component, OnInit } from '@angular/core';
import { IdentityDocumentType } from 'src/app/model/identitydocumenttype';
import { IdentitydocumenttypeService } from 'src/app/service/identitydocumenttype-service';
import { UserService } from 'src/app/service/user-service';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-registry',
  templateUrl: './user-registry.component.html',
  styleUrls: ['./user-registry.component.css']
})
export class UserRegistryComponent implements OnInit {

  tiposDocumentoIdentidad: IdentityDocumentType[] = [];

  constructor(private identityDocumentTypeService: IdentitydocumenttypeService,
              private userService: UserService,
              private location: Location  ) { }

  ngOnInit() {
    this.identityDocumentTypeService.listarTipoDocumentos().subscribe(
      (tiposDocumentoIdentidad) => {
        this.tiposDocumentoIdentidad = tiposDocumentoIdentidad;
      }
    );
  }

  guardandoUsuario(usuarioForm: NgForm): void{
    if(usuarioForm.value.baberId == null){
      //Nuevo usuario
      this.userService.insertarUsuario(usuarioForm.value).subscribe(
        _=> {
        location.reload();
        } 
      ) 
    }
    else{
      //Actualiza usuario
    this.userService.actualizarUsuario(usuarioForm.value, usuarioForm.value.userId).subscribe(
      _=> {
       location.reload();
      } 
    ) 
    }
  }

}
