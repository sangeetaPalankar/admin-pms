import { Component } from '@angular/core';
import {
  AfterViewInit,
  ChangeDetectorRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AdminService } from '../../admin.service';

export interface AdminData {
  admin_email: string;
  first_Name: string;
  last_Name: string;
}

let ELEMENT_DATA: AdminData[] = [];
@Component({
  selector: 'app-admininfo',
  templateUrl: './admininfo.component.html',
  styleUrls: ['./admininfo.component.scss'],
})
export class AdmininfoComponent {
  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    private patientListService: AdminService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.getAdmins();
    this.cdr.detectChanges();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  ngAfterViewInit() {}

  public admins: AdminData[] = []; //datasource
  displayedColumns: string[] = ['admin_email', 'first_name', 'last_name'];
  dataSource = new MatTableDataSource<AdminData>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: any;
  @ViewChild(MatSort) sort: any;

  //sorting
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

  public getAdmins(): void {
    this.patientListService.getAdmins().subscribe(
      (response: AdminData[]) => {
        this.admins = response;
        // var len = this.admins.length;
        // var i: number;
        // for (i = 0; i <= len; i++) {
        //   ELEMENT_DATA.push(this.admins[i]);
        // }
        this.dataSource = new MatTableDataSource<AdminData>(ELEMENT_DATA);
        console.log(ELEMENT_DATA);
        // console.log('datasource:', this.dataSource);
        console.log(this.admins);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
