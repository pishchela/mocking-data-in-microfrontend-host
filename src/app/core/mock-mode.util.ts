export const MOCK_MODE_KEY = 'useMocks';

export function isMockMode(): boolean {
  return localStorage.getItem(MOCK_MODE_KEY) === 'true';
}

export function setMockMode(enabled: boolean): void {
  localStorage.setItem(MOCK_MODE_KEY, String(enabled));
  window.location.reload();
}
