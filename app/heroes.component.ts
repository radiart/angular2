import { Component, OnInit } from 'angular2/core';            // Angular Component, On Init
import { Router } from 'angular2/router';               // Router

// Hero
import { Hero } from './hero';                                 // Interface
import { HeroDetailComponent } from './hero-detail.component'; // Component
import { HeroService } from './hero.service';                  // Service

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/heroes.component.html',
    styleUrls: ['app/heroes.component.css'],
    directives: [ HeroDetailComponent ],      // Binding Directives
})

export class HeroesComponent implements OnInit {

    public title = "Tour of Heros";
    public heroes: Hero[];     // heroes array
    public selectedHero: Hero; // selected hero

    constructor(
        private _heroService: HeroService,
        private _router: Router
    ) {}


    // Get Heroes list from Service
    getHeroes() {

        this._heroService.getHeroes()
            .then( heroes => this.heroes = heroes );
    }

    gotoDetail() {
        this._router.navigate(['HeroDetail', {
            id: this.selectedHero.id
        }]);
    }

    // Init
    ngOnInit() {

        this.getHeroes();
    }

    // On Select
    onSelect( hero: Hero ) {
        this.selectedHero = hero;
    }
}