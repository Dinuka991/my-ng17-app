import {Component, OnInit} from '@angular/core';
import {TaskItemComponent} from "../task-item/task-item.component";
import {TaskService} from "../../services/task.service";
import {Task} from "../../Task";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  standalone: true,
  imports: [
    TaskItemComponent,
    NgForOf
  ],
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent  implements OnInit{
  tasks: Task[] = [];

  constructor(private taskService: TaskService){}

  ngOnInit(): void {
   this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks);
  }
}
