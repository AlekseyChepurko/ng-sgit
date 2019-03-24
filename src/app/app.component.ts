import { Component } from '@angular/core';
import * as routenames from './pages/routenames';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
class AppComponent {
  adminPageLink = routenames.admin;
  carsPageLink = `${routenames.cars}`;
  loginPageLink = `${routenames.login}`;
}

export { AppComponent };
