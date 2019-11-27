import { Component } from '@angular/core'

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styles: [`
        .nav.navbar-nav {fontsize: 15px};
        #searchForm {margin-right: 100px;}
        @media (max-width: 1200px) {#searchForm {display:none}}
        li > a.active { color: #F97924 }
    `]
    // Hides the search bar if the window gets too small ^^
})

export class NavBarComponent{

}