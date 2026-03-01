import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { startMSWIfMockMode } from './app/msw-setup';

// startMSWIfMockMode()
//   .catch((err) => console.error('Failed to start MSW', err))
//   .finally(() => {
//     bootstrapApplication(App, appConfig)
//       .catch((err) => console.error(err));
// });

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
