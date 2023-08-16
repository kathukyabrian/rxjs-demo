import { Component, OnInit } from '@angular/core';
import { fromEvent, interval } from 'rxjs';
import { EventsService } from './service/events.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'rxjs-demo';

  constructor( private eventService:EventsService){

  }

  ngOnInit(): void {
    const secondsCounter = interval(1000);

    // const subscription = secondsCounter.subscribe(n=>{
    //   console.log("making api call number " + n);
    // });
    const ESC_CODE = 'Escape';
    const nameInput = document.getElementById('name') as HTMLInputElement;
    this.eventService.listen(nameInput).subscribe((e: any) => {
      if (e.code === ESC_CODE) {
        nameInput.value = '';
        console.log("You pressed escape")
      }
    });


  }
}
