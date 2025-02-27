import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faXmark, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  iconSidenav: IconDefinition = faBars;
  navbar: string = "navbar";

  private _isActive: boolean = false;

  public swapActive() {
    this._isActive = !this._isActive;
    this.iconSidenav = this._isActive? faXmark : faBars;
    this.navbar = this._isActive? "navbar active" : "navbar";
  }
}
