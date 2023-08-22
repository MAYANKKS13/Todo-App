export class Reminder {

     id: number = 0;
     reminder: string = '';
     date: string = '';
     remindMe:boolean = false;

     constructor(
        id:number=0,
        reminder:string='',
        date:string='',
        remindMe:boolean=false
     ){
        this.id=id;
        this.reminder=reminder;
        this.date=date;
        this.remindMe=remindMe;
     }

}
