import { Component } from '@angular/core'
import { DUMMY_USERS } from './dummyUsers'

const randomUser=Math.floor(Math.random()* DUMMY_USERS.length)

@Component({
    selector: 'app-user' ,
    templateUrl: './users.component.html',
    styleUrl: './users.component.css' ,
    standalone: true
})

export class Users { 
    public selectUser=DUMMY_USERS[randomUser];

    get imagePath() {
        return '../assets/Users/' + this.selectUser.avatar
    }
    onClick() {
        const randomUser=Math.floor(Math.random()* DUMMY_USERS.length)
        this.selectUser = DUMMY_USERS[randomUser]
    }

}