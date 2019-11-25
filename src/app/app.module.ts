import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SchoolsAppComponent } from './schools-app.component';
import { SchoolListComponent } from './schools/school-list.component';
import { SchoolThumbnailComponent } from './schools/school-thumbnail.component';
import { NavBarComponent } from './nav/navbar.component';
import { SchoolService } from './schools/shared/school-service'

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    SchoolsAppComponent,
    SchoolListComponent,
    SchoolThumbnailComponent,
    NavBarComponent,
    SchoolService
  ],
  providers: [],
  bootstrap: [SchoolsAppComponent]
})
export class AppModule { }
