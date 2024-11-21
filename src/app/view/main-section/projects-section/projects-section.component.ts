import { Component } from '@angular/core';
import { ProjectDOM } from '../../../model/project-dom/project-dom';
import { ProjectDescriptionComponent } from '../../subset-content/project-description/project-description.component';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [ProjectDescriptionComponent],
  templateUrl: './projects-section.component.html',
  styleUrl: './projects-section.component.css'
})
export class ProjectsSectionComponent {

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
