import { Component } from 'angular2/core';

interface Hero {
    id: number;
    name: string;
}


public hero: Hero = {
    id: 1,
    name: 'Windstorm'
};


@Component({
    selector: 'my-app',
    template:`
      <h1>{{title}}</h1>
      <h2>{{hero.name}} details!</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div>
        <label>name: </label>
        <div><input value="{{ hero.name }}" placeholder="name"></div>
      </div>
      `
})

export class AppComponent {
    public title = "Tour of Heros";
    public hero = Hero;
};