import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { SocialIconComponent } from "../../subset-content/social-icon/social-icon.component";
import { SocialDOM } from '../../../model/social-dom/social-dom';

@Component({
  selector: 'app-home-section',
  standalone: true,
  imports: [FontAwesomeModule, SocialIconComponent],
  templateUrl: './home-section.component.html',
  styleUrl: './home-section.component.css'
})
export class HomeSectionComponent {
  readonly socialList: SocialDOM[] = [
    new SocialDOM(faGithub, "#"),
    new SocialDOM(faLinkedin, "#"),
    new SocialDOM(faInstagram, "#")
  ];
}
