import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, delay } from 'rxjs/operators';
import { AgendaModel } from '../models/agenda.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  private url = 'https://crudcrud.com/api/c5fbcdafecb142a8882f75fdedc16e4f/ejercicio';


  constructor( private http: HttpClient ) { }


  crearAgenda( agenda: AgendaModel ) {

    return this.http.post(this.url, agenda)
           

  }

  actualizarAgenda( id: string,  agenda: AgendaModel ): Observable<object>  {

    return this.http.put(this.url+ '/' + id, agenda);
  }


  
  borrarAgenda( id: string ): Observable<object> {

    return this.http.delete(this.url + '/' + id);

  }


 

  getAgendaid(id:any): Observable<object> {
    return this.http.get( this.url + '/' + id );
  }


  
  getAgenda() {
    return this.http.get(this.url) 
           
  }


}
