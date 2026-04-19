export const track = (eventName: string, data?: Record<string, unknown>) => {
  if (typeof window !== 'undefined' && (window as any).umami) {
    (window as any).umami.track(eventName, data);
  } else {
    // Fallback if umami is not loaded or for debugging
    console.debug(`[Analytics] ${eventName}:`, data);
  }
};
