function triggerSuspense<T>(
  duration = 2000,
  data: T
): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data as any);
    }, duration);
  });
}

export { triggerSuspense };
