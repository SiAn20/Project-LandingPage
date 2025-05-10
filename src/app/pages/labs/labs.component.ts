import { Component } from '@angular/core';

@Component({
  selector: 'app-labs',
  imports: [],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  welcome = 'Welcome to the Todo App';
  tasks = [
    'hola',
    'hello',
    'bonjour',
  ];
}
