import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { FormsModule } from '@angular/forms';
import { ViewPatientComponent } from './view-patient/view-patient.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const myRoute:Routes=[
  {
    path:"",
    component:AddPatientComponent
  },
  {
    path:"view",
    component:ViewPatientComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AddPatientComponent,
    ViewPatientComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(myRoute),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
