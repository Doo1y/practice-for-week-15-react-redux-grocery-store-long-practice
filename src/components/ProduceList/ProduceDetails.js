import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../store/cart';

function ProduceDetails({ produce }) {
  const cartItem = Object.values(useSelector((select) => select.cart)).map(
    (item) => {
      return {
        ...item,
        ...produce[item.id]
      };
    }
  );

  const dispatch = useDispatch();

  return (
    <li className="produce-details">
      <span>{produce.name}</span>
      <span>
        <button className={'like-button' + (produce.liked ? ' selected' : '')}>
          <i className={'fas fa-heart'} />
        </button>
        <button
          className={'plus-button' + (cartItem ? ' selected' : '')}
          onClick={() => {
            dispatch(addItem(produce.id));
          }}
        >
          <i className="fas fa-plus" />
        </button>
      </span>
    </li>
  );
}

export default ProduceDetails;
