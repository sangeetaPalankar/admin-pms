import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PhysicianService } from '../../physician.service';
// import { PhysicianService } from 'src/app/service/physician.service';

export interface PeriodicElement {
  appointmentId: number;
  reason: string;
  date: string;
  acceptance: string;
  patientId: string;
  action: string;
}

const ELEMENT_DATA: PeriodicElement[] = [];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = [
    'appointmentId',
    'reason',
    'date',
    'acceptance',
    'patientId',
    'action',
  ];
  constructor(private service: PhysicianService) {}
  ngOnInit(): void {
    this.getTodaysAppointment();
  }
  
  dataSource:any;
  @ViewChild(MatPaginator) paginator !: MatPaginator;

  todaysAppointment: any;
  getTodaysAppointment() {
    this.service
      .getTodaysAppointment('p2@gmail.com', '15-03-2023', 'acceptance=accepted')
      .subscribe(response => {
        this.todaysAppointment = response;
        console.log(this.todaysAppointment);
        this.dataSource=new MatTableDataSource(ELEMENT_DATA);
        this.dataSource.paginator = this.paginator;
      });
  }

  // ngAfterViewInit() {
  //   // this.dataSource.sort = this.sort;
  //   this.dataSource.paginator = this.paginator;
  // }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
