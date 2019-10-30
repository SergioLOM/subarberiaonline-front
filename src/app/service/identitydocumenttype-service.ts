import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IdentityDocumentType } from '../model/identitydocumenttype';

@Injectable({
  providedIn: 'root'
})
export class IdentitydocumenttypeService {

    endPoint = 'http://localhost:8080/tipodocumentoidentidad/tipodociden';

  constructor(private tdiden: HttpClient) { }

  listarTipoDocumentos():Observable<IdentityDocumentType[]>{
    return this.tdiden.get<IdentityDocumentType[]>(this.endPoint)
  }
}
