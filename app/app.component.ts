import { Component } from 'angular2/core';                      // Angular comp.
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router'; // Angular Router

import { HeroesComponent } from './heroes.component';          // Heroes comp.
import { HeroDetailComponent }from './hero-detail.component';   // Heroes Details comp.
import { DashboardComponent } from './dashboard.component';     // Dashboard comp.
import { HeroService } from './hero.service';                   // Hero serv.

@Component({
    selector: 'my-app',
    template: `
        <h1>{{ title }}</h1>
        <a [routerLink]="['Dashboard']">Dashboard</a>
        <a [routerLink]="['Heroes']">Heroes</a>
        <router-outlet></router-outlet>
    `,
    styleUrls:  ['app/app.component.css'],
    directives: [ ROUTER_DIRECTIVES ],
    providers:  [ HeroService ]
})
@RouteConfig([
    // {path: '/', redirectTo: ['Dashboard'] },
    {path: '/dashboard', name: 'Dashboard', component: DashboardComponent, useAsDefault: true},
    {path: '/heroes', name: 'Heroes', component: HeroesComponent},
    {path: '/detail/:id', name: 'HeroDetail', component: HeroDetailComponent}
])
export class AppComponent {
    public title = 'Tour of Heroes';
}