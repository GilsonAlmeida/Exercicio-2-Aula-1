import { Component } from '@angular/core';
import { ClockService } from './clock.service';

@Component({
    selector: 'hora-atual',
    template: '<p>{{clock}}</p>'
})
export class ClockComponent{

    clock: Date;

    constructor(clockService: ClockService){
        clockService.generateRandomClock(1000, clock => this.clock = clock);
    }
}