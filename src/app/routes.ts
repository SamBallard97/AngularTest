import { SchoolListComponent } from './schools/school-list.component';
import { SchoolDetailsComponent } from './schools/school-details/school-details.component';
import { Routes } from '@angular/router'

export const appRoutes:Routes = [
    { path: 'schools', component: SchoolListComponent },
    { path: 'school/:id', component: SchoolDetailsComponent},
    // now a default root path
    { path: '', redirectTo: '/schools', pathMatch: 'full'}
]