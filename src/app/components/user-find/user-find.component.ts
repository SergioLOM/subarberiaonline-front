import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user-service';
import { User } from '../../model/user';
import { IdentitydocumenttypeService } from 'src/app/service/identitydocumenttype-service';
import { IdentityDocumentType } from 'src/app/model/identitydocumenttype';

@Component({
  selector: 'app-user-find',
  templateUrl: './user-find.component.html',
  styleUrls: ['./user-find.component.css']
})
export class UserFindComponent implements OnInit {

  usuario: User = new User();
  tiposDocumentoIdentidad: IdentityDocumentType[] = [];

  constructor(private userService: UserService, private identityDocumentTypeService: IdentitydocumenttypeService) { }

  ngOnInit() {
    this.identityDocumentTypeService.listarTipoDocumentos().subscribe(
      (tiposDocumentoIdentidad) => {
        this.tiposDocumentoIdentidad = tiposDocumentoIdentidad;
      }
    );
  }

  encontrarUsuario(nroDocumento: string){
    this.userService.encontrarUsuario(nroDocumento).subscribe(
      usuario => {
        this.usuario = usuario;
      }
    )
  }

}
