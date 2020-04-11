import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Alumno } from '../../../clases/alumno';

@Component({
  selector: 'app-form-alumno',
  templateUrl: './form-alumno.component.html',
  styleUrls: ['./form-alumno.component.css']
})
export class FormAlumnoComponent implements OnInit {
  @Output() alumnoCreado: EventEmitter<any> = new EventEmitter<any>();

  unAlumno: Alumno;

  constructor() { }

  ngOnInit(): void {
  }

  nuevoAlumno() {
    console.log('nuevoAlumno');
    this.unAlumno = new Alumno('Natalia', 'Natalia', 0);
  }

  crearAlumno() {
    console.log('crearAlumno');
    let legajo: number = Math.floor((Math.random() * 1000) + 1);
    this.unAlumno.legajo = legajo;
    this.alumnoCreado.emit(this.unAlumno);
    this.unAlumno = null;
  }
}
