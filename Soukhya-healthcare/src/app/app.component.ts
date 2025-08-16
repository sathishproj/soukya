import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { HeaderComponent } from './core/header.component';
import { FooterComponent } from './core/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <app-header *ngIf="!isAdminRoute"></app-header>

    <main class="min-h-screen">
      <router-outlet></router-outlet>
    </main>

    <app-footer *ngIf="!isAdminRoute"></app-footer>
  `
})
export class AppComponent {
  isAdminRoute = false;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      // check if current route starts with /admin
      this.isAdminRoute = this.router.url.startsWith('/admin');
    });
  }
}
