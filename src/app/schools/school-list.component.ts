import { Component } from '@angular/core'

@Component({
    selector: 'school-list',
    template: `  
    <div>
        <h1> List of Schools </h1>
        <hr/>
        <div class="row">
            <div *ngFor="let school of schools" class="col-md-5">
                <school-thumbnail [school]="school"></school-thumbnail>
            </div>
        </div>
    </div>
  ` 
})


export class SchoolListComponent {
    schools = [{
        id: 1,
        name: "Leeds Primary",
        population: 120,
        staffCount: 21,
        quickscan: 2,
        location: {
            address: "Mayville Avenue",
            city: "Leeds",
            country: "England"
        }},
        {
            id: 2,
            name: "Leeds Secondary",
            population: 1160,
            staffCount: 47,
            quickscan: 3,
            location: {
                address: "Autumn Street",
                city: "Leeds",
                country: 'England'
            }},
        {
            id: 3,
            name: "Birstall Primary",
            population: 60,
            staffCount: 8,
            quickscan: 1,
            location: {
                address: "Birtsall Road",
                city: "Birstall",
                country: "England"
            }},
            {
            id: 4,
            name: "Gildersome Private School",
            population: 131,
            staffCount: 45,
            quickscan: 9,
            location: {
                address: "Gelderd Road",
                city: "Gildersome",
                country: "England"
            }},
            {
            id: 5,
            name: "Morley Secondary",
            population: 600,
            staffCount: 41,
            quickscan: 7,
            location: {
                address: "Fountain Street",
                city: "Morley",
                country: "England"
            }},
            {
            id: 6,
            name: "Machester School",
            population: 13112,
            staffCount: 451,
            quickscan: 150,
            location: {
                address: "Manc Road",
                city: "Manchester",
                country: "England"
            }},
            {
            id: 7,
            name: "Qatar Primary",
            population: 610,
            staffCount: 39,
            location: {
                address: "Desert Road",
                city: "Qatar",
                country: "Qatar"
            }},
        
        ]

}