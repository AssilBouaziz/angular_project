import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GLOBAL } from 'src/app/app-config';
import { Observable } from 'rxjs';
import { Event } from 'src/models/Event';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  tab: Event[] = GLOBAL._DB.events;
  //Injection de HTTP CLIENT
  constructor(private httpClient: HttpClient) {}

  getEvents(): Observable<Event[]> {
    // return this.httpClient.get<Event[]>('linktoRestAPI');
    return new Observable((observer) => {
      observer.next(this.tab);
    });
  }

  saveEvent(event: Event): Observable<void> {
    // return this.httpClient.post<void>('http://localhost:9000/MEMBER-SERVICE/members', member);

    //ken maandekch back-end

    //this.tab.unshift(member);
    this.tab = [event, ...this.tab.filter((item) => item.id != event.id)];
    return new Observable((observer) => {
      observer.next();
    });
  }

  getEventById(id: string): Observable<Event> {
    // return this.httpClient.get<Member>('linktoRestAPI');
    return new Observable((observer) => {
      observer.next(this.tab.find((event) => event.id === id));
    });
  }
}
