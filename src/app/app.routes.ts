import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'remote',
        loadChildren: () => loadRemoteModule('mocking-data-in-microfrontend-remote', './routes').then(m => m.routes)
    },
    {
        path: '',
        redirectTo: 'remote',
        pathMatch: 'full'
    }
];
