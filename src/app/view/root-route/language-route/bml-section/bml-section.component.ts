import { Component } from '@angular/core';
import { ProjectDOM } from '../../../../model/project-dom/project-dom';
import { BadgesComponent } from '../../../subset-content/badges/badges.component';

@Component({
  selector: 'app-bml-section',
  standalone: true,
  imports: [BadgesComponent],
  templateUrl: './bml-section.component.html',
  styleUrl: './bml-section.component.css'
})
export class BmlSectionComponent {

  readonly url: string = "https://picsum.photos/300/200";

  readonly loren: string = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio beatae corrupti minus recusandae\
  officiis dolore doloremque deserunt eveniet consequatur rerum, quas, ratione impedit numquam. A\
  aliquam aperiam sunt dolores accusantium.";

  readonly projectList: ProjectDOM[] = [
    new ProjectDOM(this.url, "Project 1", this.loren),
    new ProjectDOM(this.url, "Project 2", this.loren),
    new ProjectDOM(this.url, "Project 3", this.loren),
    new ProjectDOM(this.url, "Project 4", this.loren),
    new ProjectDOM(this.url, "Project 5", this.loren)
  ];
}
