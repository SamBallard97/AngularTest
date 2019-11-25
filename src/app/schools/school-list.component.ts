import { Component } from '@angular/core'
import { SchoolService } from './shared/school-service'

@Component({
    selector: 'school-list',
    template: `  
    <div>
        <h1> List of Schools </h1>
        <hr/>
        <div class="row">
            <div *ngFor="let school of schools" class="col-md-5">
                <school-thumbnail [school]="school"></school-thumbnail>
            </div>
        </div>
    </div>
  ` 
})


export class SchoolListComponent {
    schools:any[]
    constructor(private schoolService: SchoolService){
        this.schools = this.schoolService.getSchools()
    }
}