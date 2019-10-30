import { IdentityDocumentType } from './identitydocumenttype';

export class User {
    id: number;
    nombre: string;
    apellido: string;
    nroDocumento: string;
    tipoDocumentoIdentidad = new IdentityDocumentType();
    
}
