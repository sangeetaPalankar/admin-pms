import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

import { ViewprescriptionComponent } from '../viewprescription/viewprescription.component';


export interface PeriodicElement {
  id: number;
  testConducted: string;
  actualResult: string;
  status: string;
  remarks: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    id: 1,
    testConducted: 'Brain',
    actualResult: 'Violet I',
    status: 'Better',
    remarks: 'In Progress',
  },
  {
    id: 2,
    testConducted: 'Brain',
    actualResult: 'Isla E',
    status: 'Early',
    remarks: 'Better',
  },
  {
    id: 3,
    testConducted: 'Heart',
    actualResult: 'Theodore T',
    status: 'Better',
    remarks: 'Agerage',
  },
  {
    id: 4,
    testConducted: 'Bones',
    actualResult: 'Oliver M',
    status: 'Above Average',
    remarks: 'Better',
  },
  {
    id: 5,
    testConducted: 'Throat',
    actualResult: 'Oliva A',
    status: 'Below Average',
    remarks: 'Early',
  },
];
@Component({
  selector: 'app-viewpetienthistory',
  templateUrl: './viewpetienthistory.component.html',
  styleUrls: ['./viewpetienthistory.component.scss']
})
export class ViewpetienthistoryComponent implements AfterViewInit{
  displayedColumns: string[] = [
    'id',
    'testConducted',
    'actualResult',
    'status',
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(private matDialog: MatDialog) {}
  openDialogViewPrescription() {
    this.matDialog.open(ViewprescriptionComponent),
      {
        Width: '800px',
      };
  }

}
