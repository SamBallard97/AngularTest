import { Component } from '@angular/core'

@Component({
    selector: 'school-list',
    template: `  
    <div>
        <h1> List of Schools </h1>
        <hr/>
        <school-thumbnail [school]="school1"></school-thumbnail>
    </div>
  ` 
})


export class SchoolListComponent {
    school1 = {
        id: 1,
        name: "Leeds Primary",
        population: 120,
        staffCount: 21,
        location: {
            address: "Mayville Avenue",
            city: "Leeds",
            country: "England"
        }
    }

}