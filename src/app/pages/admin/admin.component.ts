import { Component } from '@angular/core';
import { adminRoutenames } from './admin.routenames';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: []
})
class AdminComponent {
  listLink = `./${adminRoutenames.list}`;
}

export {
    AdminComponent
};
