import { Injectable } from "@angular/core"

@Injectable({
    providedIn: 'root'
})
export class userDetails {
    constructor() {
        console.log(`service has been called`)
    }
}