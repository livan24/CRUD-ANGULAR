import { Component, OnInit } from '@angular/core';
import { AgendaService } from '../../service/agendas.service';
import { AgendaModel } from '../../models/agenda.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {

  agenda: AgendaModel[] = [];
  agendas: any[any] = [];
  cargando = false;
  editar = false;


  constructor( private agendaService: AgendaService ) { }

  ngOnInit() {

this.cargar();

 
  }


  cargar(){
    this.cargando = true;
    this.agendaService.getAgenda()
      .subscribe( (resp: any) => {
        this.agenda = resp;
        this.agendas = resp;
        this.cargando = false;
       // console.log(this.agenda);
      });


  }



  borrarHeroe(id: string) {

    Swal.fire({
      title: 'Desea eliminar el registro?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si'
    }).then( resp => {

      if ( resp.value ) {
        this.agendaService.borrarAgenda(id).subscribe()
        Swal.fire({
          title: 'Eliminado Exitoso',
          icon: 'success',
          
        });
        this.cargar();
        
      }
     

    });



  }

  cambio(){
    this.editar = true;
  }
   
 
}
