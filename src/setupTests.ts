import '@testing-library/jest-dom';
import 'jest-axe/extend-expect';

// Mock ResizeObserver
globalThis.ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
};
