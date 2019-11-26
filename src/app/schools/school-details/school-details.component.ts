import { Component } from '@angular/core'
import { SchoolService } from '../shared/school-service'

@Component({
    templateUrl: './school-details.component.html',
    styles: [`
        .container { padding-left:20px; padding-right:20px; }
        .school-image: {height: 100px; }
        `]

})
export class SchoolDetailsComponent{
    school:any
    constructor(private schoolService:SchoolService){

    }

    ngOnInit() {
        this.school = this.schoolService.getSchool(1)
    }
}