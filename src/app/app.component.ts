import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterOutlet } from '@angular/router'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { NavComponent } from './components/nav/nav.component'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { DescriptionComponent } from './components/desctiption/description.component'
import { HomePageComponent } from './components/views/home-page/home-page.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NgbModule,
    NavComponent,
    FontAwesomeModule,
    DescriptionComponent,
    HomePageComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'listenly'
}
