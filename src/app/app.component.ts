import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',

  imports: [
    FontAwesomeModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    TasksComponent,
  ],
})
export class AppComponent {}
