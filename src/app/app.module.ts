import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { SchoolsAppComponent } from './schools-app.component';
import { SchoolListComponent } from './schools/school-list.component';
import { SchoolThumbnailComponent } from './schools/school-thumbnail.component';
import { NavBarComponent } from './nav/navbar.component';
import { SchoolService } from './schools/shared/school-service'
import { ToastrService } from './common/toastr.service';
import { SchoolDetailsComponent } from './schools/school-details/school-details.component'
import { appRoutes } from './routes'
import { CreateSchoolComponent } from './schools/create-school.component'
import { Error404Component } from './errors/404.component'
import { SchoolRouteActivator } from './schools/school-details/school-route-activator.service';
import { SchoolListResolver } from './schools/school-list-resolver.service'

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    SchoolsAppComponent,
    SchoolListComponent,
    SchoolThumbnailComponent,
    SchoolDetailsComponent,
    CreateSchoolComponent,
    NavBarComponent,
    Error404Component
  ],
  providers: [ 
    SchoolService,
    ToastrService,
    SchoolRouteActivator,
    SchoolListResolver,
    //long hand way to define providor
    { 
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    }
  ],
  bootstrap: [SchoolsAppComponent]
})


export class AppModule { }

// Checks is the form is complete. A route guard for page
export function checkDirtyState(component:CreateSchoolComponent){
  if (component.isDirty)
    return window.confirm("You have not saved this school, do you want to cancel?")
  return true
}


