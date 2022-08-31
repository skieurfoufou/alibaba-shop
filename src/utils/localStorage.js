export function getLocalItem(key) {
  return JSON.parse(localStorage.getItem(key));
}

export function setLocalItem(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
