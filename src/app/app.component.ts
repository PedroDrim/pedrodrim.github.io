import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './view/root-route/footer/footer.component';
import { HeaderComponent } from './view/root-route/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // Tutorial link: https://www.youtube.com/watch?v=V49fGLgM4WE&list=PL4FL-XepWXtsSXCijZOvvOI8DhB2951sC&index=5
  // Tutorial link: https://www.youtube.com/watch?v=uTPO6fKtBvM

  title = 'portfolio';
}
