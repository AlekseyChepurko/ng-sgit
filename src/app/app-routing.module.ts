import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard, adminRoutesNames } from './pages/admin';

const routes: Routes = [{
  path: `${adminRoutesNames.admin}`,
  canActivate: [AdminGuard],
  loadChildren: './pages/admin/admin.module#AdminModule'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [AdminGuard],
  exports: [RouterModule]
})
class AppRoutingModule { }

export {
  AppRoutingModule,
  routes
};
