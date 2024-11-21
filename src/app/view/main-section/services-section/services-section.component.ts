import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngular, faDocker, faRProject, faRust } from '@fortawesome/free-brands-svg-icons';
import { ServiceDOM } from '../../../model/service-dom/service-dom';
import { ServiceDescriptionComponent } from "../../subset-content/service-description/service-description.component";

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [FontAwesomeModule, ServiceDescriptionComponent],
  templateUrl: './services-section.component.html',
  styleUrl: './services-section.component.css'
})
export class ServicesSectionComponent {

  readonly loren: string = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio beatae corrupti minus recusandae\
        officiis dolore doloremque deserunt eveniet consequatur rerum, quas, ratione impedit numquam. A\
        aliquam aperiam sunt dolores accusantium.";

  readonly servicesList: ServiceDOM[] = [
    new ServiceDOM(faAngular, "Angular Developer", this.loren),
    new ServiceDOM(faDocker, "Microsservices Developer", this.loren),
    new ServiceDOM(faRProject, "Data Analist", this.loren),
    new ServiceDOM(faRust, "Backend Developer", this.loren)
  ];

}