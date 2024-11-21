import { Component, Input } from '@angular/core';
import { ServiceDOM } from '../../../model/service-dom/service-dom';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-service-description',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './service-description.component.html',
  styleUrl: './service-description.component.css'
})
export class ServiceDescriptionComponent {
  @Input({ required: true }) servicedom!: ServiceDOM;
}
