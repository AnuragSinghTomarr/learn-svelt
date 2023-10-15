export default function debounce(fn, delay) {
  let timer = null;

  return function debouncedFn(args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(args);
    }, delay);
  }
}
