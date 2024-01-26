import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../types/task.interface';
import { TaskService } from '../../services/task.service';
import { TaskItemComponent } from '../task-item/task-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    CommonModule,
    TaskItemComponent,
    FontAwesomeModule,
    HttpClientModule,
  ],
  templateUrl: './tasks.component.html',
})
export class TasksComponent {
  constructor(private taskServise: TaskService) {}
  tasks: Task[] = [];
  ngOnInit(): void {
    this.taskServise.getTasks().subscribe((task) => (this.tasks = task));
  }
}
