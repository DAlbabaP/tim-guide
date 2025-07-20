export function openSearchModal(initialQuery = '') {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new CustomEvent<string>('openSearch', { detail: initialQuery }));
} 