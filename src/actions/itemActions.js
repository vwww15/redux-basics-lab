
/*
  Завдання 3. Створення Action Creator
*/

// Додавання нового елемента
export const addItem = (item) => ({
  type: 'ADD_ITEM',
  payload: item
});


/*
  Завдання 7. Видалення елемента
*/

export const removeItem = (index) => ({
  type: 'REMOVE_ITEM',
  payload: index
});
