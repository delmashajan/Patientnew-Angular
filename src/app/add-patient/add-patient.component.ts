import { Component } from '@angular/core';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent {
  patientname=""
  patientmobile=""
  appointmentdate=""
  doctorname=""

  readValue=()=>{
    let data:any={"patientname":this.patientname,"patientmobile":this.patientmobile,"appointmentdate":this.appointmentdate,
    "doctorname":this.doctorname}
    console.log(data)
  }
}
