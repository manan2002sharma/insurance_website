import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { IntrosectionComponent } from './introsection/introsection.component';
import { InsuranceSectionComponent } from './insurance-section/insurance-section.component';
import { TeamSectionComponent } from './team-section/team-section.component';
import { BlogAndNewsSectionComponent } from './blog-and-news-section/blog-and-news-section.component';
import { MailSectionComponent } from './mail-section/mail-section.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MailSectionComponent,NavbarComponent,IntrosectionComponent,InsuranceSectionComponent,TeamSectionComponent,BlogAndNewsSectionComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'insurance_website';
}
