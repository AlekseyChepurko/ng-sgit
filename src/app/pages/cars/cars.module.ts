import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AtomsModule } from 'src/app/atoms/atoms.module';

import { CarsComponent } from './cars.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [{
  path: '',
  component: CarsComponent
}];

@NgModule({
  declarations: [
    CarsComponent
  ],
  imports: [
      CommonModule,
      AtomsModule,
      RouterModule.forChild(routes)
    ]
})
class CarsModule { }

export {
    CarsModule,
    routes
};
