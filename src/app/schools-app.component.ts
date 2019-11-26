import { Component } from '@angular/core';

@Component({
  selector: 'schools-app',
  template: `
      <navbar></navbar>
      <router-outlet></router-outlet>
      `
})


export class SchoolsAppComponent {
  title = 'AngularWebExample';
}
