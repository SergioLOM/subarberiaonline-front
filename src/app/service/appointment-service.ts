import {Barber} from '../model/barber';

export class AppointmentService {

    constructor(){}

    public selectedBarber: Barber = {
        id: null,
        nombre: '',
        nit: '',
        usuario: null
    }
}
