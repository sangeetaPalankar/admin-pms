import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { NewobservationComponent } from '../newobservation/newobservation.component';
import { EditobservationComponent } from '../editobservation/editobservation.component';
import { DeleteobservationComponent } from '../deleteobservation/deleteobservation.component';
import { EnterprescriptionComponent } from '../enterprescription/enterprescription.component';
import { ViewprescriptionComponent } from '../viewprescription/viewprescription.component';

export interface PeriodicElement {
  id: number;
  testConducted: string;
  actualResult: string;
  status: string;
  remarks: string;
  action1: string;
  action2: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    id: 1,
    testConducted: 'Brain',
    actualResult: 'Violet I',
    status: 'Better',
    remarks: 'In Progress',
    action1: 'Edit',
    action2: 'Delete',
  },
  {
    id: 2,
    testConducted: 'Brain',
    actualResult: 'Isla E',
    status: 'Early',
    remarks: 'Better',
    action1: 'Edit',
    action2: 'Delete',
  },
  {
    id: 3,
    testConducted: 'Heart',
    actualResult: 'Theodore T',
    status: 'Better',
    remarks: 'Agerage',
    action1: 'Edit',
    action2: 'Delete',
  },
  {
    id: 4,
    testConducted: 'Bones',
    actualResult: 'Oliver M',
    status: 'Above Average',
    remarks: 'Better',
    action1: 'Edit',
    action2: 'Delete',
  },
  {
    id: 5,
    testConducted: 'Throat',
    actualResult: 'Oliva A',
    status: 'Below Average',
    remarks: 'Early',
    action1: 'Edit',
    action2: 'Delete',
  },
];

@Component({
  selector: 'app-updatepatient',
  templateUrl: './updatepatient.component.html',
  styleUrls: ['./updatepatient.component.scss'],
})
export class UpdatepatientComponent implements AfterViewInit, OnInit {
  constructor(private matDialog: MatDialog) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  displayedColumns: string[] = [
    'id',
    'testConducted',
    'actualResult',
    'status',
    'remarks',
    'action',
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  openDialogNewObservation() {
    this.matDialog.open(NewobservationComponent),
      {
        Width: '800px',
      };
  }

  openDialogEditObservation() {
    this.matDialog.open(EditobservationComponent),
      {
        Width: '800px',
      };
  }

  openDialogDeleteObservation() {
    this.matDialog.open(DeleteobservationComponent),
      {
        Width: '800px',
      };
  }

  openDialogEnterPrescription() {
    this.matDialog.open(EnterprescriptionComponent),
      {
        Width: '800px',
      };
  }

  openDialogViewPrescription() {
    this.matDialog.open(ViewprescriptionComponent),
      {
        Width: '800px',
      };
  }
}
