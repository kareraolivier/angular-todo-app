import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Task } from '../../types/task.interface';
@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-task.component.html',
})
export class AddTaskComponent {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  task = new FormControl('');
  day = new FormControl('');
  reminder = new FormControl(false);

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    if (!this.task.value || !this.day.value)
      return alert('plz add a task and day');

    const newTask: Task = {
      id: Math.floor(Math.random() * 100000),
      task: this.task.value || '',
      day: this.day.value || '',
      reminder: this.reminder.value || false,
    };
    this.onAddTask.emit(newTask);

    this.task.reset();
    this.day.reset();
    this.reminder.setValue(false);
  }
}
