import { PhysicianRoutingModule } from './physician-routing.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DefaultComponent } from './components/default/default.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PendingappointmentComponent } from './components/pendingappointment/pendingappointment.component';
import { UpdatepatientComponent } from './components/updatepatient/updatepatient.component';
import { NewobservationComponent } from './components/newobservation/newobservation.component';
import { EditobservationComponent } from './components/editobservation/editobservation.component';
import { DeleteobservationComponent } from './components/deleteobservation/deleteobservation.component';
import { EnterprescriptionComponent } from './components/enterprescription/enterprescription.component';
import { ViewprescriptionComponent } from './components/viewprescription/viewprescription.component';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { ViewpetienthistoryComponent } from './components/viewpetienthistory/viewpetienthistory.component';
import { PhysicianprofileComponent } from './components/physicianprofile/physicianprofile.component';


@NgModule({
  declarations: [
    DashboardComponent,
    DefaultComponent,
    SidebarComponent,
    PendingappointmentComponent,
    UpdatepatientComponent,
    NewobservationComponent,
    EditobservationComponent,
    DeleteobservationComponent,
    EnterprescriptionComponent,
    ViewprescriptionComponent,
    ViewpetienthistoryComponent,
    PhysicianprofileComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    MatPaginatorModule,
    PhysicianRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatTableModule,
    MatSnackBarModule,
    MatDialogModule
  ]
})
export class PhysicianModule { }




