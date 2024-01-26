import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
})
export class ButtonComponent implements OnInit {
  @Input() buttonText?: string;
  @Input() buttonStyle?: string;
  @Output() btnClick: EventEmitter<void> = new EventEmitter();
  constructor() {}
  ngOnInit(): void {}

  onClick = () => this.btnClick.emit();
}
