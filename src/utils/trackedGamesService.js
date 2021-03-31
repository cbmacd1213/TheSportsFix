import tokenService from './tokenService'
const BASE_URL = '/api/trackedgames-api';

export default {
  index,
  create,
  update,
  deleteOne
}

function index() {
  return fetch(BASE_URL, {
    method: 'GET',
    headers: {'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()},
  }).then(res => res.json());
}

function create(trackedGamesList) {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: {'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()},
    body: JSON.stringify(trackedGamesList)
  }).then(res => res.json());
}

function update(trackedGamesList) {
  return fetch(`${BASE_URL}/${trackedGamesList._id}`, {
    method: 'PUT',
    headers: {'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()},
    body: JSON.stringify(trackedGamesList)
  }).then(res => res.json());
}

function deleteOne(id) {
  return fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
    headers: {'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()},

  }).then(res => res.json());
}