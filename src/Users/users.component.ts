import { Component } from '@angular/core'
import { DUMMY_USERS } from './dummyUsers'
import { signal, computed} from '@angular/core'

const randomUser=Math.floor(Math.random()* DUMMY_USERS.length)

@Component({
    selector: 'app-user' ,
    templateUrl: './users.component.html',
    styleUrl: './users.component.css' ,
    standalone: true
})

export class Users { 
    public selectUser=signal(DUMMY_USERS[randomUser]);
    public imageUrl= computed(() => {return '../assets/Users/' 
        + this.selectUser().avatar
    })

    // get imageUrl() {
    //     return '../assets/Users/' + this.selectUser.avatar
    // }
    onClick() {
        const randomUser=Math.floor(Math.random()* DUMMY_USERS.length)
        this.selectUser.set(DUMMY_USERS[randomUser])
    }

}