import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../types/task.interface';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './task-item.component.html',
})
export class TaskItemComponent {
  @Input() task?: Task;
  @Output() onDeleteTask: EventEmitter<void> = new EventEmitter();
  faTimesCircle = faTimesCircle;

  onDelete = (task?: Task) => this.onDeleteTask.emit();
}
