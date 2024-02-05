import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../types/task.interface';
import { TaskService } from '../../services/task.service';
import { TaskItemComponent } from '../task-item/task-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { error } from 'console';
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, TaskItemComponent, FontAwesomeModule],
  templateUrl: './tasks.component.html',
})
export class TasksComponent implements OnInit {
  constructor(private taskServise: TaskService) {}
  tasks: Task[] = [];
  ngOnInit() {
    this.taskServise.getTasks().subscribe({
      next: (tasks) => {
        this.tasks = tasks;
      },
      error: (error) => console.error(error),
    });
  }
  onDeleteTask = (task: Task) => {
    // if (task) alert(`do you want to delete this task ${task?.text}`);

    this.taskServise.deleteTask(task).subscribe(() => {
      this.tasks = this.tasks.filter((task) => task.id !== task.id);
    });
  };
}
