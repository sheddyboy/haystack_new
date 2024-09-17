export function debounce(func: (...args: any[]) => void, delay: number) {
  let debounceTimer: ReturnType<typeof setTimeout>;
  return function (this: any, ...args: any[]) {
    const context = this;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func.apply(context, args), delay);
  };
}

// Function for querying a single element by selector
export function qs<T extends HTMLElement = HTMLDivElement>(
  selector: string
): T {
  return document.querySelector(selector) as T;
}

// Function for querying multiple elements by selector
export function qsa<T extends HTMLElement = HTMLDivElement>(
  selector: string
): NodeListOf<T> {
  return document.querySelectorAll(selector) as NodeListOf<T>;
}

export function formatCuratedDate(inputDate: Date) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date(inputDate);
  const month = date.getMonth();
  const year = date.getFullYear();
  const day = date.getDate();
  return `${months[month]} ${day.toString().padStart(2, "0")}, ${year}`;
}
