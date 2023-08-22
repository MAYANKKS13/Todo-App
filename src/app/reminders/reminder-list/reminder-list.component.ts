import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reminder } from '../reminder';

@Component({
  selector: 'app-reminder-list',
  templateUrl: './reminder-list.component.html',
  styleUrls: ['./reminder-list.component.css']
})
export class ReminderListComponent {

    url: string = 'http://localhost:3000/reminders';
    reminders: Reminder[] = [];

    constructor(private http: HttpClient)
    {
      this.http.get<Reminder[]>(this.url).subscribe((response)=>
      {
        this.reminders = response;
      });
    }


}
