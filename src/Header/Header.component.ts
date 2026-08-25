
import {Component} from '@angular/core'

@Component({
    /* Very important to have two words seperated with -
        like here it is app-header
        cause if we keep it as header then it could possibly
        collide with the actural <header> tag of html
    */
    selector: 'app-header',
    templateUrl: './header.component.html' ,
    /* standalone is a component flag, which means that this component
        is completely independent and self-contianed and can be used anywhere
        without the need to be imported and registered into the @NgModule
        into the declaration array
    */
    standalone: true , 
    styleUrl: './header.component.css'
})
//the class should be in export mode, so that other files can import it
export class HeaderComponent {} 