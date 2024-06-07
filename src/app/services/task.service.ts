import {Injectable} from '@angular/core';
import {tasks as mockTasks} from "../mock-tasks";
import {Observable, of} from "rxjs";
import {Task} from "../Task";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks():Observable<Task[]> {
    return of(mockTasks);
  }
}
