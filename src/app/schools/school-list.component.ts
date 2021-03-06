import { Component } from '@angular/core'
import { SchoolService } from './shared/school-service'
import { ToastrService } from '../common/toastr.service'
import { ActivatedRoute } from '@angular/router'

declare let toastr

@Component({
    template: `  
    <div>
        <h1> List of Schools </h1>
        <hr/>
        <div class="row">
            <div *ngFor="let school of schools" class="col-md-5">
                <school-thumbnail (click)="handleThumbnailClick(school.name)" [school]="school"></school-thumbnail>
            </div>
        </div>
    </div>
  ` 
})


export class SchoolListComponent {
    schools:any
    constructor(private schoolService: SchoolService, private toastr:ToastrService, private route:ActivatedRoute){
    }

    ngOnInit(){
        // Linked to the route
        this.schools = this.route.snapshot.data['schools']
    }

    handleThumbnailClick(schoolName){
        this.toastr.success(schoolName)
    }
}