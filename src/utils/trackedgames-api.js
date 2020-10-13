const BASE_URL = '/api/trackedgames-api';

export function getAll() {
  return fetch(BASE_URL)
  .then(res =>{
    console.log('Shit', res)
    res.json()
    
  });
}

export function create(trackedGamesList) {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(trackedGamesList)
  }).then(res => res.json());
}

export function update(trackedGamesList) {
  return fetch(`${BASE_URL}/${trackedGamesList._id}`, {
    method: 'PUT',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(trackedGamesList)
  }).then(res => res.json());
}

export function deleteOne(id) {
  return fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE'
  }).then(res => res.json());
}