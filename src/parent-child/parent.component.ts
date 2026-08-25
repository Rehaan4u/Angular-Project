import { Component } from '@angular/core';
import { Child } from './child.component'

@Component ({
    selector : 'app-parent' , 
    imports : [Child],
    standalone: true , 
    templateUrl : './parent.component.html'
})

export class Parent {}