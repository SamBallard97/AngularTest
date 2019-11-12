import { Component } from '@angular/core';

@Component({
  selector: 'schools-app',
  template: `
      <navbar></navbar>
      <school-list></school-list>
      `
})


export class SchoolsAppComponent {
  title = 'AngularWebExample';
}
