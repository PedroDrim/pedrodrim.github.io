import { Component, Input, input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SocialDOM } from '../../../model/social-dom/social-dom';

@Component({
  selector: 'app-social-icon',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './social-icon.component.html',
  styleUrl: './social-icon.component.css'
})
export class SocialIconComponent {
  @Input({ required: true }) socialdom!: SocialDOM;
}
