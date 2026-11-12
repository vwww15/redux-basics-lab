
/*
  Завдання 4. Створення Redux Store
*/

import { legacy_createStore as createStore } from 'redux';
import itemReducer from './reducers/itemReducer';

// Створення сховища Redux
const store = createStore(itemReducer);

export default store;
