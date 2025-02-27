import { Component } from '@angular/core';
import { HomeSectionComponent } from '../home-section/home-section.component';
import { ServicesSectionComponent } from '../services-section/services-section.component';

@Component({
  selector: 'app-about-main',
  standalone: true,
  imports: [ServicesSectionComponent, HomeSectionComponent],
  templateUrl: './about-main.component.html',
  styleUrl: './about-main.component.css'
})
export class AboutMainComponent {

}
