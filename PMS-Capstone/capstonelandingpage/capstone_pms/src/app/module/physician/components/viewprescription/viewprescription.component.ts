import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  position: number;
  drugName: string;
  dosage: string;
  notes: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    drugName: 'Ranbaxy',
    dosage: '1-1-0',
    notes: 'Before bath',
  },
  {
    position: 2,
    drugName: 'Paracetomol',
    dosage: '1-1-1',
    notes: 'After checkup',
  },
  {
    position: 3,
    drugName: 'Betadin',
    dosage: '1-1-0',
    notes: 'During food',
  },
  {
    position: 4,
    drugName: 'Cough Syrup',
    dosage: '0-1-1',
    notes: 'During Pain',
  },
  {
    position: 5,
    drugName: 'Strepsils',
    dosage: '0-1-2',
    notes: 'Before food',
  },
  {
    position: 6,
    drugName: 'Ranbaxy',
    dosage: '0-2-1',
    notes: 'Before workout',
  },
  {
    position: 7,
    drugName: 'Viks',
    dosage: '2-1-1',
    notes: 'Before consultation',
  },
  {
    position: 8,
    drugName: 'Painkiller',
    dosage: '0-1-2',
    notes: 'Before workout',
  },
  {
    position: 9,
    drugName: 'Dolo',
    dosage: '1-1-0',
    notes: 'Before workout',
  },
  {
    position: 10,
    drugName: 'Dolo',
    dosage: '1-1-0',
    notes: 'Before bath',
  },
];

@Component({
  selector: 'app-viewprescription',
  templateUrl: './viewprescription.component.html',
  styleUrls: ['./viewprescription.component.scss'],
})
export class ViewprescriptionComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'drugName', 'dosage', 'notes'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
