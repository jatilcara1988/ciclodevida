import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Alumno } from '../../../clases/alumno';

@Component({
  selector: 'app-tabla-alumno',
  templateUrl: './tabla-alumno.component.html',
  styleUrls: ['./tabla-alumno.component.css']
})
export class TablaAlumnoComponent implements OnInit {

  @Input() listadoAlumnos: Alumno[] ;
  @Output() alumnoSeleccionado: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
    /*
    this.listadoAlumnos = [
      { apellido: 'Aguas' ,nombre:"rogelio",legajo: 999 },
      { apellido: 'Mercurio' ,nombre:"Alfredo",legajo: 999 }
    ];
    */
  }

  ngOnInit(): void {
  }

  mostrarDetalles(unAlumno: Alumno)
  {
    console.log('Show details', unAlumno);
    this.alumnoSeleccionado.emit(unAlumno);
  }
}
