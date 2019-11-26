import { Component, Input, Output, EventEmitter } from '@angular/core'


@Component({
    selector: 'school-thumbnail',
    template: `
    <div [routerLink]="['/schools', school.id]" class="well hoverwell thumbnail">
        <h2>{{school.name}}</h2>
        <div>Population: {{school.population}}</div>
        <div>Number of Staff: {{school.staffCount}}</div>
        <div *ngIf="school?.quickscan">Quickscans: {{school.quickscan}}</div>
        <div [ngClass]="getSchoolCountry()" [ngSwitch]="school?.location?.country">
            <span *ngSwitchCase="'England'">UK School</span>
            <span *ngSwitchCase="'Qatar'">Foreign School</span>
        </div>
        <div>
            <span>Location: {{school.location.address}}</span>
            <span class="pad-left">{{school.location.city}}, {{school.location.country}}</span>
        </div>
    </div>
    `,
    // *NgIf will only show this if the field is not null (can use [hidden] = !school?.quickscan) if u want to render but just hide
    // uses ngClass to select a foreign school and make it bold black text
    styles: [`
        .black { color: black !important; }
        .bold { font-weight: bold; }
        .pad-left {margin-left: 10px; }
        .well div {color: #bbb; }
        
    `]
})

export class SchoolThumbnailComponent{
    // public component (of any type) will be passed in from another component
    @Input() school:any

    // If a school if in Qatar, sets the font to bold and color to black
    getSchoolCountry() {
        const isForeignSchool = this.school && this.school.location.country === 'Qatar'
        return {black: isForeignSchool, bold: isForeignSchool}
    }


}