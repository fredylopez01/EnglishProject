import { Component, Input } from '@angular/core';
import { eventLine } from 'src/app/interfaces/EventLine';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent {
  @Input({required: true}) event!:eventLine;isHovering: boolean = false;

  onMouseEnter() {
    this.isHovering = true;
  }

  onMouseLeave() {
    this.isHovering = false;
  }
}
