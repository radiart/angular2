import { Component, OnInit } from 'angular2/core'; // Angular Component , OnInit
import { RouteParams } from 'angular2/router';     // Angular Router

import { Hero } from './hero';                     // Hero Interface
import { HeroService } from './hero.service';      // Hero Service

@Component({
   selector: 'my-hero-detail',
    templateUrl: 'app/hero-detail.component.html',
    styleUrls: ['app/hero-detail.component.css'],
    inputs: ['hero']
})

export class HeroDetailComponent implements OnInit {
    public hero: Hero;

    constructor(
        private _heroService: HeroService,
        private _routeParams: RouteParams
    ) {}

    // Init
    ngOnInit() {
        if( !this.hero ) {
            let id = +this._routeParams.get('id');
            console.log( id );
            this._heroService.getHero(id)
                .then(hero => this.hero = hero);
        }
    }

    // Go back
    goBack() {
        window.history.back();
    }
}