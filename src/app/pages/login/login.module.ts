import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AtomsModule } from 'app/atoms/atoms.module';

import { LoginComponent } from './login.component';
import { LoginFormComponent } from './components/form/form.component';

const routes: Routes = [{
  path: '',
  component: LoginComponent
}];

@NgModule({
  declarations: [
    LoginComponent,
    LoginFormComponent
  ],
  imports: [
      CommonModule,
      AtomsModule,
      ReactiveFormsModule,
      RouterModule.forChild(routes)
    ]
})
class LoginModule { }

export {
    LoginModule,
    routes
};
