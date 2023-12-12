import { Injectable } from '@angular/core';
import { GLOBAL } from 'src/app/app-config';
import { Event } from 'src/models/Event';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class EventService {
  constructor(private httpClient: HttpClient) {}
  tab: Event[] = GLOBAL._DB.events;
}
