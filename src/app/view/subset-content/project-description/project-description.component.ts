import { Component, Input } from '@angular/core';
import { ProjectDOM } from '../../../model/project-dom/project-dom';

@Component({
  selector: 'app-project-description',
  standalone: true,
  imports: [],
  templateUrl: './project-description.component.html',
  styleUrl: './project-description.component.css'
})
export class ProjectDescriptionComponent {
  @Input({ required: true }) projectdom!: ProjectDOM;
}
