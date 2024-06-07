import {Component, Input} from '@angular/core';
import {Task} from "../../Task";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import {NgStyle} from "@angular/common";
import {icon} from "@fortawesome/fontawesome-svg-core";


@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [FontAwesomeModule, NgStyle,],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  @Input() task: Task | undefined;
  faTimes = faTimes;

  constructor() {
  }

  ngOnInit(): void {
  }

  onDelete(id: any) {

  }


}
