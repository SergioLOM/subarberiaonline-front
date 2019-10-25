import { IdentityDocumentType } from './identitydocumenttype';

export class User {
    id: number;
    nombre: string;
    apellido: string;
    tipoDocumentoIdentidad = new IdentityDocumentType();
    nroDocumento: string;
}
