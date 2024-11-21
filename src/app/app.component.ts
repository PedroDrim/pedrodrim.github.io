import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeSectionComponent } from './view/main-section/home-section/home-section.component';
import { FooterComponent } from "./view/main-section/footer/footer.component";
import { ServicesSectionComponent } from "./view/main-section/services-section/services-section.component";
import { AboutSectionComponent } from "./view/main-section/about-section/about-section.component";
import { HeaderComponent } from "./view/main-section/header/header.component";
import { ProjectsSectionComponent } from "./view/main-section/projects-section/projects-section.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeSectionComponent, FooterComponent, ServicesSectionComponent, AboutSectionComponent, HeaderComponent, ProjectsSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // Tutorial link: https://www.youtube.com/watch?v=V49fGLgM4WE&list=PL4FL-XepWXtsSXCijZOvvOI8DhB2951sC&index=5
  // Tutorial link: https://www.youtube.com/watch?v=uTPO6fKtBvM

  title = 'portfolio';
}
