let _hidden: string = 'hidden';
let _visibilityChange: string = 'visibilitychange';

if (document.hidden !== undefined) {
  _hidden = 'hidden';
  _visibilityChange = 'visibilitychange';
} else if ((document as any).mozHidden !== undefined) {
  _hidden = 'mozHidden';
  _visibilityChange = 'mozvisibilitychange';
} else if ((document as any).msHidden !== undefined) {
  _hidden = 'msHidden';
  _visibilityChange = 'msvisibilitychange';
} else if ((document as any).webkitHidden !== undefined) {
  _hidden = 'webkitHidden';
  _visibilityChange = 'webkitvisibilitychange';
}

export const HIDDEN = _hidden as 'hidden';
export const VISIBILITY_CHANGE = _visibilityChange as 'visibilitychange';
