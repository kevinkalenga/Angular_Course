import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Appcomponent1 } from './appcomponent1/appcomponent1';
import { Appcomponent2 } from './appcomponent2/appcomponent2';
import { ParentComponent } from './parent-component/parent-component';
import { App1 } from './app1/app1';

@Component({
  selector: 'app-root',
  standalone: true,

  imports: [RouterOutlet, App1, Appcomponent1,  Appcomponent2, ParentComponent],

  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('angular_course');
}
