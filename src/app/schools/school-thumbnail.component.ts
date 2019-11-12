import { Component, Input, Output, EventEmitter } from '@angular/core'


@Component({
    selector: 'school-thumbnail',
    template: `
    <div class=well>
        <h2>{{school.name}}</h2>
        <div>Population: {{school.population}}</div>
        <div>Number of Staff: {{school.staffCount}}</div>
        <div>
            <span>Location: {{school.location.address}}</span>
            <span class="pad-left">{{school.location.city}}, {{school.location.country}}</span>
        </div>
    </div>
    `,
    styles: [`
        .pad-left {margin-left: 10px; }
        .well div {color: green; }
    `]
})

export class SchoolThumbnailComponent{
    // public component (of any type) will be passed in from another component
    @Input() school:any


}