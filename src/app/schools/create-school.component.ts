import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
    template:`
        <h1>New School</h1>
        <hr>
        <div class="col-md-6">
            <h3>[Create School Form Here]</h3>
            <br/>
            <br/>
            <button type="submit" class="btn btn-primary">Save Button</button>
            <button type="button" class="btn btn-default" (click)="cancel()">Cancel Button</button>
        </div>
        `
})

export class CreateSchoolComponent{
    isDirty:boolean = true;
    constructor(private router: Router){
        
    }
    
    cancel(){
        this.router.navigate(['/schools'])
    }
}