/*
  this is like the app.component.ts 
  here all the @Component and other decorators are declared
  that provides two important things
  --selector-- && --templateURL--
  the selector tells angular ro look fro app-root tag in index.html
  and templateURL points to HTML structure here it is app.html, that need to
  be replaced with the app-root tag
*/
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Qnopy');
}
