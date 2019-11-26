import { SchoolListComponent } from './schools/school-list.component';
import { SchoolDetailsComponent } from './schools/school-details/school-details.component';
import { Routes } from '@angular/router'
import { CreateSchoolComponent } from './schools/create-school.component';

export const appRoutes:Routes = [
    { path: 'schools/new', component: CreateSchoolComponent},
    { path: 'schools', component: SchoolListComponent },
    { path: 'schools/:id', component: SchoolDetailsComponent},   
    // now a default root path
    { path: '', redirectTo: '/schools', pathMatch: 'full'}
]