import { bootstrap } from 'angular2/platform/browser'; // Angular Bootstrap
import { ROUTER_PROVIDERS } from 'angular2/router';    // Angular Router

import { AppComponent } from './app.component';    // App Component
import { HeroService } from './hero.service';      // Hero Service


bootstrap( AppComponent, [
    ROUTER_PROVIDERS,
    HeroService
]);