import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [],
  templateUrl: './add-task.component.html',
})
export class AddTaskComponent {
  task?: string;
  day?: string;
  reminder?: boolean;

  constructor() {}
  onSubmit() {
    console.log('Submitting form', {
      task: this.task,
      day: this.day,
      reminder: this.reminder,
    });
  }
  ngOnInit(): void {}
}
