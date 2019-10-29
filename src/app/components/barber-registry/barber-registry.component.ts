import { Component, OnInit } from '@angular/core';
import { BarberService } from '../../service/barber-service';
import { Barber } from '../../model/barber';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-barber-registry',
  templateUrl: './barber-registry.component.html',
  styleUrls: ['./barber-registry.component.css']
})
export class BarberRegistryComponent implements OnInit {

  barberia: Barber = new Barber();

  constructor(private barberService: BarberService, private location: Location) { }

  ngOnInit() {
  }

  guardandoBarberia(){
    if(this.barberia.id == null){
        //Nuevo libro
        this.barberService.insertarBarberia(this.barberia).subscribe(
           _=> {
            location.reload();
           } 
        )   
    }
    else{
      //Actualiza
      console.log("Actualizar barberia");

    }
  }

}
