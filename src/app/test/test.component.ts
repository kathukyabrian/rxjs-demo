import { Component, OnInit } from '@angular/core';
import { EventsService } from '../service/events.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  constructor(private eventService: EventsService){

  }

  ngOnInit(): void {
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
