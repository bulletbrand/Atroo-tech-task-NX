// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const debounce = <F extends (...params: any[]) => void>(
  fn: F,
  delay: number
) => {
  let timeoutID: number | null = null;

  return (...args: unknown[]) => {
    timeoutID !== null && clearTimeout(timeoutID);
    timeoutID = window.setTimeout(() => fn.apply(this, args), delay);
  };
};
