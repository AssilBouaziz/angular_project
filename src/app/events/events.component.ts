import { Component } from '@angular/core';
import { EventService } from 'src/services/event.service';
import { Event } from 'src/models/Event';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent {
  constructor(private ES: EventService) {}
  dataSource: Event[] = this.ES.tab;
  displayedColumns: string[] = ['id', 'titre', 'dateDebut', 'dateFin', 'lieu'];
}
