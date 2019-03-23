import { Routes } from '@angular/router';

import { ListComponent } from './list.component';

const routesNames = {
};

Object.defineProperty(routesNames, 'toString', {
  value: () => 'list'
});

const routes: Routes = [{
  path: routesNames.toString(),
  component: ListComponent
}];

export {
  routes,
  routesNames
};
