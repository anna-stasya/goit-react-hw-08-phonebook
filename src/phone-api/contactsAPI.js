//!перезаписала в phoneOperations

import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001';

export async function fetchContacts() {
  const { data } = await axios.get('/contacts');
  return data;
}

export async function postContacts(contactData) {
  const { data } = await axios.post('/contacts', contactData);
  return data;
}

export async function deleteContacts(contactId) {
  const { data } = await axios.delete(`/contacts/${contactId}`);
  return data;
}
