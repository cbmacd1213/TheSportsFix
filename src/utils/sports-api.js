const BASE_URL = '/api/sports';

export function getAll() {
  return fetch(BASE_URL)
  .then(res => res.json());
}