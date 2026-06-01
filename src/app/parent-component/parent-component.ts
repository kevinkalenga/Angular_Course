import { Component } from '@angular/core';
import { Childcomponent } from '../childcomponent/childcomponent';
@Component({
  selector: 'app-parent-component',
  standalone: true,
  imports: [Childcomponent],
  templateUrl: './parent-component.html',
  styleUrl: './parent-component.css',
})
export class ParentComponent {
  parentMessage = "Message from the parent"

  message = ""

  receiveMessage(event:string){
    this.message = event;
  }
}
