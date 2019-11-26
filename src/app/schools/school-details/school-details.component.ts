import { Component } from '@angular/core'
import { SchoolService } from '../shared/school-service'
import { ActivatedRoute } from '@angular/router'

@Component({
    templateUrl: './school-details.component.html',
    styles: [`
        .container { padding-left:20px; padding-right:20px; }
        `]

})
export class SchoolDetailsComponent{
    school:any
    constructor(private schoolService:SchoolService, private route:ActivatedRoute){

    }

    ngOnInit() {
        this.school = this.schoolService.getSchool(+this.route.snapshot.params['id'])
    }
}