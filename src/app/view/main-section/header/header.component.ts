import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faXmark, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  private _isActive: boolean = false;

  iconSidenav: IconDefinition = faBars;
  navbar: string = "navbar";

  public swapActive() {
    this._isActive = !this._isActive;
    this.iconSidenav = this._isActive? faXmark : faBars;
    this.navbar = this._isActive? "navbar active" : "navbar";
  }
}
