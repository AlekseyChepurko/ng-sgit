import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AtomsModule } from 'src/app/atoms/atoms.module';

import { LoginComponent } from './login.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [{
  path: '',
  component: LoginComponent
}];

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
      CommonModule,
      AtomsModule,
      RouterModule.forChild(routes)
    ]
})
class LoginModule { }

export {
    LoginModule,
    routes
};
