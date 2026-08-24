/*
  this is like the app.component.ts 
  here all the @Component and other decorators are declared
  that provides two important things
  --selector-- && --templateURL--
  the selector tells angular to look for app-root tag in index.html
  and templateURL points to HTML structure here it is app.html, that need to
  be replaced with the app-root tag
*/
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

/*
  The @Component and class RelationshipYour takeaway is spot on. 

  A component requires both visual presentation (HTML/CSS) and logical control (TypeScript).
  The class acts as the blueprint for the component's state and internal backend logic.
  
  The @Component decorator acts as the "glue" or metadata config. 
  It tells Angular: "Take this class, attach this specific HTML file, style it with this CSS file, 
  and render it whenever you see this custom HTML tag (the selector).
  
  "Automation: You never type const myApp = new App();. 
  Angular reads the HTML tree, sees your selector (like <app-root>), 
  instantiates the class under the hood, and automatically manages its lifecycle and data injection.

  --VERY IMPORTANT THING TO NOTE--
   Every individual component on your screen is powered by exactly one TypeScript class instance managed entirely by Angular.
   which means one component=one class=one file
*/

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Qnopy');
}
