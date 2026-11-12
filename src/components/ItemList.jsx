
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem } from '../actions/itemActions';

function ItemList() {
  const items = useSelector((state) => state.items);
  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(addItem('New Redux Item'));
  };

  const handleRemoveItem = (index) => {
    dispatch(removeItem(index));
  };

  return (
    <div>
      <h2>Список елементів</h2>

      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}{' '}

            <button onClick={() => handleRemoveItem(index)}>
              Видалити
            </button>
          </li>
        ))}
      </ul>

      <button onClick={handleAddItem}>
        Додати елемент
      </button>
    </div>
  );
}

export default ItemList;
