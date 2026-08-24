import { bootstrapApplication } from '@angular/platform-browser';
/* --Another important observation--
    it is a strict rule in the TypeScript ecosystem. You should not specify the .ts extension when importing files.
    If you try to write import { App } from './app/app.ts';, TypeScript will throw an error.
     The Problem: If TypeScript allowed you to write .ts in your import statement, that text would remain unchanged 
     in the final compiled code. The browser would try to fetch ./app/app.ts, which does not exist in production.
     
     The Solution: By leaving the extension off, you let the bundler (like Vite or Esbuild in Angular) handle the resolution. 
     It looks for ./app/app.ts during development and accurately maps it to ./app/app.js in production.
*/
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
