import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import { LoginComponent } from './componentes/login/login.component';
import { ErrorComponent } from './componentes/error/error.component';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './pages/input/admin/admin.component';
import { DetalleAlumnoComponent } from './pages/input/detalle-alumno/detalle-alumno.component';
import { FormAlumnoComponent } from './pages/input/form-alumno/form-alumno.component';
import { TablaAlumnoComponent } from './pages/input/tabla-alumno/tabla-alumno.component';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    LoginComponent,
    ErrorComponent,
    AdminComponent,
    DetalleAlumnoComponent,
    FormAlumnoComponent,
    TablaAlumnoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
