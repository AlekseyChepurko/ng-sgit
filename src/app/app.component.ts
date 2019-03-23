import { Component } from '@angular/core';
import { adminRoutesNames } from './pages/admin';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
class AppComponent {
  adminPageLink = adminRoutesNames.admin;
  listPageLink = `${adminRoutesNames.admin}/${adminRoutesNames.admin.list}`;
}

export { AppComponent };
