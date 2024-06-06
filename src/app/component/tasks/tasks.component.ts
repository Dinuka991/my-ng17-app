import {Component, OnInit} from '@angular/core';
import { tasks} from "../../mock-tasks";
import {NgForOf} from "@angular/common";
import {TaskItemComponent} from "../task-item/task-item.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    NgForOf , TaskItemComponent
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent  implements OnInit{
  tasks = tasks;
  constructor() {
  }

  ngOnInit(): void {
  }
}
