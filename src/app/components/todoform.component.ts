import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

export interface TaskItem {
  description: string;
  priority: string;
  duedate: Date;
}

@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrls: ['./todoform.component.css']
})
export class TodoformComponent implements OnInit {

  @Output()
  itemOutOfForm = new EventEmitter<TaskItem>();

  @ViewChild('doform')
  doform: NgForm;

  constructor() { }

  ngOnInit() {
  }

  processForm(myform: NgForm) {
    console.log('myform: ', myform.value);
    //the form
    console.log('Processing Form: ', this.doform.value);

    var toProcess: TaskItem = { description: myform.value.description, priority: myform.value.priority, duedate: myform.value.duedate };

    for (let i in this.doform.value) {
      console.log('i = ', i, ', v = ', this.doform.value[i]);
    }
    this.itemOutOfForm.next(toProcess);
    this.doform.reset();
  }

}
