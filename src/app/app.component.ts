import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

export interface TodoItem {
  id: number;
  task: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  todoList: TodoItem[] = [];
  newTask: string = '';
  addTask(): void {
    if (this.newTask.trim() !== '') {
      const newTodoItem: TodoItem = {
        id: Date.now(),
        task: this.newTask,
      };

      this.todoList.push(newTodoItem);
      this.newTask = '';
    }
  }

  deleteTask(id: number): void {
    this.todoList = this.todoList.filter((item) => item.id !== id);
  }
}
