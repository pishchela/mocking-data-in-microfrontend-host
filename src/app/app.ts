import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { isMockMode, setMockMode } from './core/mock-mode.util';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('mocking-data-in-microfrontend-host');
  protected isMock = isMockMode();

  toggleMockMode(): void {
    setMockMode(!this.isMock);
  }
}
