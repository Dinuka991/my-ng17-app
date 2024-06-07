import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import {TasksComponent} from "../tasks/tasks.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent, TasksComponent,FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title = 'Task Tracker';
  faCoffee = faCoffee;
  constructor() {
    this.title = 'Task Tracker';
    this.faCoffee = faCoffee;
    console.log('HeaderComponent created');

  }

  ngOnInit() {
    console.log('HeaderComponent initialized');
  }

  toggledAddTask() {
    console.log('toggle');
  }

}
