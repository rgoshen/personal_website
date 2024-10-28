declare global {
  namespace jest {
    interface Matchers<R> {
      toHaveAttribute(attr: string, value?: unknown): R;
    }
  }
}

export {};
