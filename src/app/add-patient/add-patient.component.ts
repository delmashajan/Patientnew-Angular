import { Component } from '@angular/core';
import { ApiService } from '../api.service';

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

  constructor(private api:ApiService){}

  readValue=()=>{
    let data:any={"patientname":this.patientname,"patientmobile":this.patientmobile,"appointmentdate":this.appointmentdate,
    "doctorname":this.doctorname}
    console.log(data)
    this.api.addPatient(data).subscribe(
      (response:any)=>{
        console.log(response)
        if(response.status=="success"){
          alert("success")
          this.patientname=""
          this.patientmobile=""
          this.appointmentdate=""
          this.doctorname=""
        }else{
          alert("wrong entry")
        }
      }
    )
  }
}
