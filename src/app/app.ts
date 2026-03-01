import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { isMockMode, setMockMode } from './core/mock-mode.util';
import { startMSWIfMockMode } from './msw-setup';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('mocking-data-in-microfrontend-host');
  protected isMock = isMockMode();

  ngOnInit(): void {
    startMSWIfMockMode()
      .catch((err) => console.error('Failed to start MSW', err));
  }

  toggleMockMode(): void {
    setMockMode(!this.isMock);
  }
}
