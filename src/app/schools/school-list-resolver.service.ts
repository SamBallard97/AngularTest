import { Injectable } from "@angular/core";
import { SchoolService } from './shared/school-service';
import { Resolve } from '@angular/router';
import { map } from 'rxjs/operators';

// Tells the other component to wait untill the data is loaded

@Injectable()
export class SchoolListResolver implements Resolve<any>{
    constructor(private schoolService:SchoolService){

    }

    resolve(){
        // simply recieving schools and sending back out
        return this.schoolService.getSchools().pipe(map(schools => schools))
    }
}