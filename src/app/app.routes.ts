import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';
import { registerRemoteMockHandlers } from './msw-setup';

const REMOTE_NAME = 'mocking-data-in-microfrontend-remote';

export const routes: Routes = [
    {
        path: 'remote',
        loadChildren: () => loadRemoteModule(REMOTE_NAME, './routes').then(async (m) => {
            await registerRemoteMockHandlers(REMOTE_NAME);
            return m.routes;
        })
    },
    {
        path: '',
        redirectTo: 'remote',
        pathMatch: 'full'
    }
];
