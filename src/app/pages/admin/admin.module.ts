import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AtomsModule } from 'src/app/atoms/atoms.module';

import { AdminComponent } from './admin.component';
import { routes as listRoutes, ListComponent } from './pages/list';
import { CommonModule } from '@angular/common';

const routes: Routes = [{
  path: '',
  component: AdminComponent,
  children: listRoutes
}];

@NgModule({
  declarations: [
    ListComponent,
    AdminComponent
  ],
  imports: [
      CommonModule,
      AtomsModule,
      RouterModule.forChild(routes)
    ]
})
class AdminModule { }

export {
  AdminModule,
  routes
};
