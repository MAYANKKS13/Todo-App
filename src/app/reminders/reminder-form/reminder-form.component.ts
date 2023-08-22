import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {NgForm} from '@angular/forms';
import { Reminder } from '../reminder';

@Component({
  selector: 'app-reminder-form',
  templateUrl: './reminder-form.component.html',
  styleUrls: ['./reminder-form.component.css']
})
export class ReminderFormComponent {

  reminder: Reminder = new Reminder();

  url:string = 'http://localhost:3000/reminders';

  constructor(private http:HttpClient)
  {

  }

  onSubmit(reminderForm:NgForm):void{

     this.http.post(this.url, reminderForm.value).subscribe((response)=>
     {
      reminderForm.reset();
     });
  }

}
