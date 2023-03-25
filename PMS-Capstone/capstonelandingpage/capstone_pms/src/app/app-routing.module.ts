import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { AfterauthComponent } from './components/afterauth/afterauth.component';
import { HerosectionComponent } from './components/content/herosection/herosection.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    // redirectTo: '/index',
    // pathMatch: 'full',
  },
  {
    path: 'index',
    component: IndexComponent,
  },

  {
    path: 'herosection',
    component: HerosectionComponent,
  },
  {
    path: 'physician',
    loadChildren: () =>
      import('./module/physician/physician.module').then(
        (m) => m.PhysicianModule
      ),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./module/admin/admin.module').then((m) => m.AdminModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
