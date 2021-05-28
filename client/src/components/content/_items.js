import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

//import actions
import { _getItems } from '../../../actions/_items';

const _Items = () => {
  const _items = useSelector((state) => state._items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(_getItems());
  }, [dispatch]);

  return (
    //this wont work - change item in map function
    <div>
      {_items.map((item) => (
        <li>{item}</li>
      ))}
    </div>
  );
};

export default _Items;
