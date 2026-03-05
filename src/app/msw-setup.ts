
import { RequestHandler } from 'msw';
import { setupWorker, SetupWorker } from 'msw/browser';
import { MOCK_MODE_KEY } from './core/mock-mode.util';

export const worker: SetupWorker = setupWorker();

const registeredRemotes = new Set<string>();

export async function registerRemoteMockHandlers(remoteName: string): Promise<void> {
    if (registeredRemotes.has(remoteName)) return;
    registeredRemotes.add(remoteName);
    try {
        const module = await import(`${remoteName}/mockHandlers`);
        const handlers: RequestHandler[] = module?.registerMockHandlers();
        if (handlers?.length) {
            worker.use(...handlers);
            console.log(`Registering ${handlers.length} mock handlers for remote: ${remoteName}`);
        }
    } catch (err) {
        console.error(`Failed to register mock handlers for remote: ${remoteName}`, err);
    }
}

export async function startMSWIfMockMode(): Promise<void> {
  if (localStorage.getItem(MOCK_MODE_KEY) !== 'true') {
    return;
  }
  await worker.start({
    // Don't hard fail if a request doesn't have a corresponding request handler.
    onUnhandledRequest: 'bypass',
    serviceWorker: {
        url: '/mockServiceWorker.js',
    }
  });
}