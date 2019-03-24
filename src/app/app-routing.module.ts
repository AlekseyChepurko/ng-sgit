import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as routenames from './pages/routenames';
import { AdminGuard } from './pages/admin';

const routes: Routes = [{
    path: `${routenames.admin}`,
    canActivate: [AdminGuard],
    data: {
        fallbackRedirect: 'login'
    },
    loadChildren: './pages/admin/admin.module#AdminModule'
  }, {
    path: `${routenames.cars}`,
    loadChildren: './pages/cars/cars.module#CarsModule'
  }, {
    path: `${routenames.login}`,
    loadChildren: './pages/login/login.module#LoginModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [AdminGuard],
  exports: [RouterModule]
})
class AppRoutingModule {}

export { AppRoutingModule, routes };
