export const generateId = () => '_' + Math.random().toString(36).substr(2, 9);

export function saveToStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function getFromStorage(key) {
  return JSON.parse(localStorage.getItem(key)) || [];
}
