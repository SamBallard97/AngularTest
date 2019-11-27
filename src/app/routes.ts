import { SchoolListComponent } from './schools/school-list.component';
import { SchoolDetailsComponent } from './schools/school-details/school-details.component';
import { Routes } from '@angular/router'
import { CreateSchoolComponent } from './schools/create-school.component';
import { Error404Component } from './errors/404.component';
import { SchoolRouteActivator } from './schools/school-details/school-route-activator.service';
import { SchoolListResolver } from './schools/school-list-resolver.service';

export const appRoutes:Routes = [
    { path: 'schools/new', component: CreateSchoolComponent, canDeactivate: ['canDeactivateCreateEvent']},
    // Before resolving this route, call the resolver which makes sure all the data is loaded first
    { path: 'schools', component: SchoolListComponent, resolve: {schools:SchoolListResolver}},
    { path: 'schools/:id', component: SchoolDetailsComponent, canActivate: [SchoolRouteActivator]},   
    // error route 
    { path: '404', component: Error404Component },
    // now a default root path
    { path: '', redirectTo: '/schools', pathMatch: 'full'}

]