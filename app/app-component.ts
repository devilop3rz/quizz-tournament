import {Component} from 'angular2/core';

@Component({
    template: '<h1>{{titleName}}</h1>',
    selector: 'home'
})
export class HomeComponent {
    titleName: string
    constructor() {

        this.titleName = "Hello from Home"
    }

}

alert('hey');