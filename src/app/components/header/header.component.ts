import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  title: string = 'Task tracker';

  toggleForm = () => console.log('form is being toogled');
}
