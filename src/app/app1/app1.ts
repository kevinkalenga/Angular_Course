import { Component } from '@angular/core';

@Component({
  selector: 'app-app1',
  standalone: true,
  imports: [],
  template: `
    <h2>Welcome</h2>
  `,

  styles: `
    h2{
      color:red;
    }
  `,
})
export class App1 {}
