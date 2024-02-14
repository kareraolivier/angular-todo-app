import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../types/task.interface';
import { TaskService } from '../../services/task.service';
import { TaskItemComponent } from '../task-item/task-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddTaskComponent } from '../add-task/add-task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    CommonModule,
    TaskItemComponent,
    FontAwesomeModule,
    AddTaskComponent,
  ],
  templateUrl: './tasks.component.html',
})
export class TasksComponent {
  constructor(private taskServise: TaskService) {}

  tasks: Task[] = [];

  onDeleteTask = (task: Task) => {
    console.log(task);
    this.taskServise.deleteTask(task).subscribe(() => {
      this.tasks = this.tasks.filter((t) => t.id !== task.id);
    });
  };

  ngOnInit() {
    this.taskServise.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  addTask = (task: Task) => {
    this.taskServise.addTask(task).subscribe((task) => this.tasks.push(task));
  };
}
