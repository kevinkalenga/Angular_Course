import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-childcomponent',
   standalone: true,
  imports: [],
  templateUrl: './childcomponent.html',
  styleUrl: './childcomponent.css',
})
export class Childcomponent {
  @Input() message!:string;

  @Output() messageEvent = new EventEmitter<string>();

  sendMessage(){
    this.messageEvent.emit("This is from child")
  }

}
