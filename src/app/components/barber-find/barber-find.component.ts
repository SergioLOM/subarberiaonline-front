import { Component, OnInit } from '@angular/core';
import { BarberService } from '../../service/barber-service';
import { Barber } from '../../model/barber';

@Component({
  selector: 'app-barber-find',
  templateUrl: './barber-find.component.html',
  styleUrls: ['./barber-find.component.css']
})
export class BarberFindComponent implements OnInit {

  barberia: Barber = new Barber();

  constructor(private barberService: BarberService) { }

  ngOnInit() {
  }
  
  encontrarBarberia(nit: string){
    this.barberService.encontrarBarberia(nit).subscribe(
      barberia => {
        this.barberia = barberia;
      }
    )
  }

}
