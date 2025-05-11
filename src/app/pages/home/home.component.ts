import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  tasks = signal<Task[]>([
    { id: 1, name: 'Crear proyecto', state: false },
    { id: 2, name: 'Comprar comida', state: false },
    { id: 3, name: 'Hacer la tarea', state: false },
    { id: 4, name: 'Limpiar la casa', state: false },
  ]);

  addTask(event: Event) {
    const input = event.target as HTMLInputElement;
    const newTask = input.value;
    this.tasks.update((tasks) => {
      return [...tasks, { id: tasks.length + 1, name: newTask, state: false }];
    });
  }

  removeTask(index: number) {
    this.tasks.update((tasks) => {
      return tasks.filter((task, position) => position !== index);
    });
  }

  UpdateStateTask(index: number) {
    this.tasks.update((tasks) => {
      return tasks.map((task, position) => {
        if (position === index) {
          return { ...task, state: !task.state };
        }
        return task;
      });
    });
  }
}
