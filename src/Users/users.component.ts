//We are importing the Input from the angualr/core
import { Component, Input} from '@angular/core'
// import { DUMMY_USERS } from './dummyUsers'
import { signal, computed} from '@angular/core'
import { input } from '@angular/core'
 

@Component({
    selector: 'app-user' ,
    templateUrl: './users.component.html',
    styleUrl: './users.component.css' ,
    standalone: true
})

export class Users { 
    /*
        We use {required :true}, because here we have declared
        avatar with an "!", so what required does, if the devloepr forgets
        to bind the [avatar] with a value then compiler will throw error
    */
    // @Input({required: true}) avatar!:string;
    // @Input({required: true}) name!: string;

    avatar=input.required<string>();
    name=input.required<string>();

    imagePath=computed(() => {return '../assets/Users/' + this.avatar()})

    // get imagePath() { 
    //     return '../assets/Users/' + this.avatar
    // }
    // imageUrl() {
    //     this.avatar.set()
    // }
}