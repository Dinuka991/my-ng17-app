import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import {TasksComponent} from "../tasks/tasks.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent, TasksComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title = 'Task Tracker';
  constructor() {
    this.title = 'Task Tracker';
    console.log('HeaderComponent created');

  }

  ngOnInit() {
    console.log('HeaderComponent initialized');
  }

  toggledAddTask() {
    console.log('toggle');
  }

}
