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
    NavBarComponent
  ],
  providers: [ SchoolService, ToastrService ],
  bootstrap: [SchoolsAppComponent]
})
export class AppModule { }
