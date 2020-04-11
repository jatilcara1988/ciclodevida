import { Component } from '@angular/core';
import { Alumno } from '../../../clases/alumno';
import { Profesor } from '../../../clases/profesor';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  title = 'Ejemplo  @Input()  @Output() - Clase 03';
  listadoPrincipal: Alumno[] ;
  alumnoSeleccionado: Alumno;
  profesorParaMostrar: Profesor;
  ListadoProfesoresPrincipal: Profesor[];

  constructor() {
    this.profesorParaMostrar = new Profesor('Clementina', 'Programacion', 777);
    this.alumnoSeleccionado = new Alumno('Clementina', 'Perez', 777);
    this.listadoPrincipal = [
      { apellido: 'Aguas', nombre: 'Rogelio', legajo: 666 },
      { apellido: 'Mercurio', nombre: 'Alfredo', legajo: 333 }
    ];

    this.ListadoProfesoresPrincipal = [
      { apellido: 'Alvarez', materia: 'Matematicas', legajo: 666 },
      { apellido: 'Villagran', materia: 'Prog 1', legajo: 333 }
    ];
  }
  tomarAlumnoCreado(NuevoAlumno: Alumno) {
    this.listadoPrincipal.push(NuevoAlumno);
  }
  tomarAlumnoParaDetalles(NuevoAlumno: Alumno) {
    this.alumnoSeleccionado = NuevoAlumno;
  }
  tomarProfesorParaDetalles(NuevoProfe: Profesor) {
    this.profesorParaMostrar = NuevoProfe;
  }
  mostrarProfesor(parametroProfesor: Profesor) {
    console.log('profesor', parametroProfesor);
    //this.profesorParaMostrar=parametroProfesor;
    this.ListadoProfesoresPrincipal.push(parametroProfesor);
  }

}
