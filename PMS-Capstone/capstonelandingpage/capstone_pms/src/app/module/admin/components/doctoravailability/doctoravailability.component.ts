import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { AdminService } from '../../admin.service';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatDialog } from '@angular/material/dialog';
import { HttpErrorResponse } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { UpdateavailabilityComponent } from '../updateavailability/updateavailability.component';
import { MatPaginator } from '@angular/material/paginator';
import { DeleteavailabilityComponent } from '../deleteavailability/deleteavailability.component';
import { MatSort, Sort } from '@angular/material/sort';

export class DoctorData {
  physicianEmail: any;
  first_name: any;
  last_name: any;
  speciality: any;
  startDate: any;
  endDate: any;
  availability: any;
}
const doctor_data: DoctorData[] = [];

@Component({
  selector: 'app-doctoravailability',
  templateUrl: './doctoravailability.component.html',
  styleUrls: ['./doctoravailability.component.scss'],
})
export class DoctoravailabilityComponent implements OnInit, AfterViewInit {
  public doctors: DoctorData[] = [];
  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    public dialog: MatDialog,
    private doctorService: AdminService
  ) {}

  ngOnInit(): void {
    this.availablePhysicians();
  }

  public availablePhysicians(): void {
    this.doctorService.availablePhysicians().subscribe(
      (response: DoctorData[]) => {
        this.doctors = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  displayedColumns: string[] = [
    'physicianEmail',
    'first_name',
    'last_name',
    'speciality',
    'startDate',
    'endDate',
    'availability',
    'update',
    'delete',
  ];
  dataSource = new MatTableDataSource<DoctorData>(doctor_data);

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  @ViewChild(MatPaginator) paginator: any;

  openDialogUpdate(pemail: string) {
    this.dialog.open(UpdateavailabilityComponent);
    this.doctorService.setThatVar(pemail);
  }

  openDialogDelete(pemail: string) {
    this.dialog.open(DeleteavailabilityComponent);
    this.doctorService.setThatVar(pemail);
  }

  //sorting table
  @ViewChild(MatSort) sort: any;
  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
  //searching
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
