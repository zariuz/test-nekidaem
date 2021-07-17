import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://trello.backend.tests.nekidaem.ru/api/v1/',
});
