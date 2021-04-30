import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgendaComponent } from './componentes/agenda/agenda.component';
import { VirtualComponent } from './componentes/virtual/virtual.component';

const routes: Routes = [
  { path: 'agenda', component: AgendaComponent },
  { path: 'agenda/:id', component: VirtualComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'agenda' }
];



@NgModule({
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
