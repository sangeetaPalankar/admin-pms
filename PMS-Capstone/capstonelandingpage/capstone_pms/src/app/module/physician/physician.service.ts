import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhysicianService {

  constructor(private http:HttpClient) { }

  //Todays accepted appointment
  getTodaysAppointment(physicianEmail:string,date:string,acceptance:string){
    return this.http.get("http://localhost:8081/appointment/"+physicianEmail+"/"+date + "?" +acceptance)
  }

  //All pending appointments
  getPendingAppointments(physicianEmail:string, acceptance:string){
    return this.http.get("http://localhost:8081/appointment/"+physicianEmail+"?"+acceptance)
  }
}
