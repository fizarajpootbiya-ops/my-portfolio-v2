/**
 * Custom screenshot storage utility for SZ Portfolio.
 * Allows Syeda Zainab to upload or paste image URLs for each of the 11 projects
 * directly in the browser, persisting them to localStorage.
 */

const STORAGE_PREFIX = 'sz_screenshot_';

export function getCustomScreenshot(imageKey: string): string | null {
  try {
    return localStorage.getItem(`${STORAGE_PREFIX}${imageKey}`);
  } catch {
    return null;
  }
}

export function setCustomScreenshot(imageKey: string, dataUrlOrUrl: string): void {
  try {
    localStorage.setItem(`${STORAGE_PREFIX}${imageKey}`, dataUrlOrUrl);
    window.dispatchEvent(new CustomEvent('sz-screenshot-updated', { detail: { imageKey } }));
  } catch (err) {
    console.error('Failed to save custom screenshot:', err);
  }
}

export function removeCustomScreenshot(imageKey: string): void {
  try {
    localStorage.removeItem(`${STORAGE_PREFIX}${imageKey}`);
    window.dispatchEvent(new CustomEvent('sz-screenshot-updated', { detail: { imageKey } }));
  } catch (err) {
    console.error('Failed to remove custom screenshot:', err);
  }
}

export function getAllCustomScreenshots(): Record<string, string> {
  const result: Record<string, string> = {};
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith(STORAGE_PREFIX)) {
        const imageKey = key.replace(STORAGE_PREFIX, '');
        const val = localStorage.getItem(key);
        if (val) result[imageKey] = val;
      }
    }
  } catch {}
  return result;
}
