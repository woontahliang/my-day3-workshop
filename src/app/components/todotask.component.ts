import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

export interface TaskItem {
  description: string;
  priority: string;
  duedate: Date;
}

@Component({
  selector: 'app-todotask',
  templateUrl: './todotask.component.html',
  styleUrls: ['./todotask.component.css']
})
export class TodotaskComponent implements OnInit {
  taskList: TaskItem[] = [];

  _itemIntoTask: TaskItem;

  @Input() set itemIntoTask(value: TaskItem) {
    console.log("todotask Set itemIntoTask called!");
    if (value != undefined) {
      this.processItem(value, false);
      this._itemIntoTask = value;
    }
  }

  get itemIntoTask(): TaskItem {
    console.log("todotask Get itemIntoTask called!");
    return this._itemIntoTask;
  }

  @Output()
  itemOutOfTask = new EventEmitter<TaskItem>();

  constructor() { }

  ngOnInit() {
  }

  processItem(toProcess: TaskItem, isRemoveFromTask = true) {
    if (isRemoveFromTask) {
      this.removeItem(toProcess);
    } else {
      this.addItem(toProcess);
    }
  }

  addItem(toProcess: TaskItem) {
    console.log("todotask addItem called! Description: " + toProcess.description + ", Priority: " + toProcess.priority + ", Due Date: " + toProcess.duedate);
    this.taskList.push(toProcess);
  }

  removeItem(toProcess: TaskItem) {
    console.log("todotask removeItem called! Description: " + toProcess.description + ", Priority: " + toProcess.priority + ", Due Date: " + toProcess.duedate);
    var index: number = 0;
    this.taskList.splice(index, 1);
  }
}
