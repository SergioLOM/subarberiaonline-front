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

  //barberia: Barber = new Barber();

  constructor(private barberService: BarberService, 
              private location: Location) { }


  ngOnInit() {
  }

  guardandoBarberia(barberiaForm: NgForm): void{
    if(barberiaForm.value.baberId == null){
      //Nueva barberia
      this.barberService.insertarBarberia(barberiaForm.value).subscribe(
        _=> {
        location.reload();
        } 
      ) 
    }
    else{
      //Actualiza barberia
    this.barberService.actualizarBarberia(barberiaForm.value, barberiaForm.value.barberId).subscribe(
      _=> {
       location.reload();
      } 
    ) 
    }
  }

}
