import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

import Swal from 'sweetalert2';


import { AgendaService } from '../../service/agendas.service';
import { AgendaModel } from '../../models/agenda.model';


@Component({
  selector: 'app-virtual',
  templateUrl: './virtual.component.html',
  styleUrls: ['./virtual.component.css']
})
export class VirtualComponent implements OnInit {


  agenda: AgendaModel;
  agendas: any[any] = [];
  editar = false;
  guarda = true;
  datos = String;
 
  

  constructor(
    private agendaService: AgendaService,
               private route: ActivatedRoute 
  ) {
    this.agenda = new AgendaModel(
      '',
      '',
      '',
    );
    
   }
   

  ngOnInit(){

    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    if ( id !== 'nuevo' ) {

      this.agendaService.getAgendaid(id)
        .subscribe( (resp: any)  => {
          this.agenda = resp;
          this.agendas = resp;
          
          console.log(this.agenda);
        });

    }
    
 

  }


  guardar( form: NgForm, id: string ) {

    console.log(id);
    if ( form.invalid ) {
      console.log('Formulario no válido');
      return;
    }
  
   
    Swal.showLoading();


    let peticion: Observable<any>;

    if ( this.agendas._id ) {
      peticion = this.agendaService.actualizarAgenda( id, this.agenda );
      
    } else {
      peticion = this.agendaService.crearAgenda( this.agenda );
      
    }
     
    
    peticion.subscribe( resp => {
      Swal.hideLoading();
      Swal.fire({
        title: 'Registro Exitoso',
        icon: 'success',
        
      });
      form.reset();

    });



  }


}
