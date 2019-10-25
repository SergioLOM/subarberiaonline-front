import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Barber } from '../../model/barber'
import { BarberService } from 'src/app/service/barber-service';

@Component({
  selector: 'app-barber-list',
  templateUrl: './barber-list.component.html',
  styleUrls: ['./barber-list.component.css']
})
export class BarberListComponent implements OnInit {

  barberias: Barber[] = [];
  barberiaSeleccionada: Barber;

  constructor(private barberService: BarberService) { }

  ngOnInit() {
    this.barberService.listarBarberias().subscribe(
      barberias => {
          this.barberias = barberias;
      }
    );  
  }

  showModal(barberia: Barber){
    this.barberiaSeleccionada = barberia;
  }

  eliminarBarberia(id: number){
    this.barberService.eliminarBarberia(id).subscribe(
      _=>{
        this.barberias=this.barberias.filter(
          barberia => barberia != this.barberiaSeleccionada
        );
      }
    )
  }

}
