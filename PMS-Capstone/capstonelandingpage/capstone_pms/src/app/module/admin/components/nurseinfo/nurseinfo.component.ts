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

export interface NurseData {
  nurse_email: number;
}

let ELEMENT_DATA: NurseData[] = [];

@Component({
  selector: 'app-nurseinfo',
  templateUrl: './nurseinfo.component.html',
  styleUrls: ['./nurseinfo.component.scss'],
})
export class NurseinfoComponent {
  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    private nurseListService: AdminService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.getNurses();
    this.cdr.detectChanges();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  ngAfterViewInit() {}

  public nurses: NurseData[] = []; //datasource
  displayedColumns: string[] = ['nurse_email'];
  dataSource = new MatTableDataSource<NurseData>(ELEMENT_DATA);

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

  public getNurses(): void {
    this.nurseListService.getNurses().subscribe(
      (response: NurseData[]) => {
        this.nurses = response;
        // var len = this.nurses.length;
        // var i: number;
        // for (i = 0; i <= len; i++) {
        //   ELEMENT_DATA.push(this.nurses[i]);
        // }
        this.dataSource = new MatTableDataSource<NurseData>(ELEMENT_DATA);
        // console.log(ELEMENT_DATA);
        // console.log('datasource:', this.dataSource);
        console.log(this.nurses);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
