let hiddenKey: string = 'hidden';
let visibilityChangeKey: string = 'visibilitychange';

export type VisibilityTState = 'show' | 'hide';
export type VisibilityListener = (state: VisibilityTState) => void;

const listeners: VisibilityListener[] = [];

if (document.hidden !== undefined) {
  hiddenKey = 'hidden';
  visibilityChangeKey = 'visibilitychange';
} else if ((document as any).mozHidden !== undefined) {
  hiddenKey = 'mozHidden';
  visibilityChangeKey = 'mozvisibilitychange';
} else if ((document as any).msHidden !== undefined) {
  hiddenKey = 'msHidden';
  visibilityChangeKey = 'msvisibilitychange';
} else if ((document as any).webkitHidden !== undefined) {
  hiddenKey = 'webkitHidden';
  visibilityChangeKey = 'webkitvisibilitychange';
}

document.addEventListener(visibilityChangeKey, () => {
  const state: VisibilityTState = (document as any)[hiddenKey] ? 'hide' : 'show';
  listeners.forEach(listener => listener(state));
}, false);

export function addVisibilityListener(listener: VisibilityListener) {
  listeners.push(listener);
}

export function removeVisibilityListener(listener: VisibilityListener) {
  const index = listeners.indexOf(listener);
  if (index !== -1) listeners.splice(index, 1);
}
