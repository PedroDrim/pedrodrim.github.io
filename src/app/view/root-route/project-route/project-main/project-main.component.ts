import { Component } from '@angular/core';
import { ProjectsSectionComponent } from '../projects-section/projects-section.component';

@Component({
  selector: 'app-project-main',
  standalone: true,
  imports: [ProjectsSectionComponent],
  templateUrl: './project-main.component.html',
  styleUrl: './project-main.component.css'
})
export class ProjectMainComponent {

}
