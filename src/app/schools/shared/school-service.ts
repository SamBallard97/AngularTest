import { Injectable } from '@angular/core'

@Injectable()
export class SchoolService{
    getSchools(){
        return SCHOOLS
    }

    getSchool(id:number){
        return SCHOOLS.find(school => school.id === id)
    }
}

const SCHOOLS = [{
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