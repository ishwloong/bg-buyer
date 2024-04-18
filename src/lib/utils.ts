import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getFontUrl(inputString: string) {
  var match = inputString.match(/<link\s+href=['"]([^'"]+)['"]/);
  if (match) {
    return match[1].replace(/\s+/g, "+");
  } else {
    return null;
  }
}

export function replaceUnderscoreWithDash(cssString: string) {
  return cssString.replace(/:root{(.*?)}/s, function (p1) {
    return p1.replace(/(--[\w-]+):/g, function (p1) {
      return p1.replace(/_/g, "-");
    });
  });
}
