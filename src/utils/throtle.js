import { nanoid } from "nanoid";

export default function throttle(fn, delay) {
  let storedArgs = null;
  let timer = null;

  return function throttledFn(args) {
    const uqkey = nanoid();
    storedArgs = {
      key: uqkey,
      params: args,
    };
    if (!timer) {
      fn(storedArgs.params);

      timer = setTimeout(() => {
        if (storedArgs.key !== uqkey) {
          fn(storedArgs.params);
        }
        clearTimeout(timer);
        timer = null;
      }, delay);
    }
  }
}
