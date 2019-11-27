import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { SchoolService } from '../shared/school-service';

@Injectable()
export class SchoolRouteActivator implements CanActivate{
    constructor(private schoolService:SchoolService, private router:Router){

    }

    canActivate(route:ActivatedRouteSnapshot){
        // school exists if an id exists for it
        const schoolExists = !!this.schoolService.getSchool(+route.params['id'])

        // Redirect to 404 if school doesnt exists
        if(!schoolExists)
            this.router.navigate(['/404'])

        return schoolExists
    }
}