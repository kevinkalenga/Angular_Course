import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Highlight } from '../highlight';

@Component({
  selector: 'app-appcomponent1',
  standalone: true,
  imports: [FormsModule, CommonModule,  Highlight],
  templateUrl: './appcomponent1.html',
  styleUrls: ['./appcomponent1.css'],
})
export class Appcomponent1 {
  title = "Welcome to our web site";
  btnClick = false;
  textColor = "blue";
  isActive = false;
  clSpan = 2;
  userName = ''
  topMargin = 20;
  imageUrl = 'https://images.unsplash.com/photo-1619410283995-43d9134e7656?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  width = 150;
  height = 100;
  textButtonRed = "black";
  blackColor = "red";
  mrgTop = 6;
  padding = 20;
  changeColor = true;
  isPrimary = true;
  isLarge = false;
  items = ['Banana', 'Mango', 'Ananas'];
  status = 'pending';
  onButtonClick(){
    this.textButtonRed = "red";
    this.btnClick = true;
  }

}
