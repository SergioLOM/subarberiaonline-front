import { User } from './user';
import { Barber } from './barber';

export class Appointment {
    id: number;
    fecha: Date;
    hora: string;
    usuario = new User();
    barberia = new Barber();

}
