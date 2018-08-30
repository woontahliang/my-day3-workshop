import { Component } from '@angular/core';

export interface TaskItem {
  description: string;
  priority: string;
  duedate: Date;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-day3-workshop';

  taskItem: TaskItem;

  moveToTask(item: TaskItem) {
    console.log("app moveToTask called! Description: " + item.description + ", Priority: " + item.priority + ", Due Date: " + item.duedate);
    this.taskItem = item;
  }
}
