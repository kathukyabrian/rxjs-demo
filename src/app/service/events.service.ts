import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { fromEvent } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor() { }

  escEvent$: Observable<any> = new Observable();

  listen(nameInput: any): Observable<any> {
    this.escEvent$ =  fromEvent(nameInput, 'keydown');

    return this.escEvent$;
  }

}
