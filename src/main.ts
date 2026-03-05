import { initFederation } from '@angular-architects/native-federation';
import { startMSWIfMockMode } from './app/msw-setup';

initFederation('federation.manifest.json')
  .catch(err => console.error(err))
  .then(() => startMSWIfMockMode())
  .catch((err) => console.error('Failed to start MSW', err))
  .then(_ => import('./bootstrap'))
  .catch(err => console.error(err));
