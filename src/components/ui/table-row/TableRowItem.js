import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { EventContext } from '@/contexts/EventContext';

function TableRowItem(props) {
  const { children, matchResultData, doubleResultData, lowerUpperData, match } = props;
  const { cart, deleteItem, addToCart } = useContext(EventContext);

  const [matchResultActive, setMatchResultActive] = useState();
  const [doubleResultActive, setDoubleResultActive] = useState();
  const [upperLowerResultActive, setUpperLowerResultActive] = useState();

  const handleClick = (event, activeIndex) => {
    switch (event.id) {
      case '1':
        setMatchResultActive((prev) => (prev === activeIndex ? '' : activeIndex));
        break;
      case '2':
        setDoubleResultActive((prev) => (prev === activeIndex ? '' : activeIndex));
        break;
      case '5':
        setUpperLowerResultActive((prev) => (prev === activeIndex ? '' : activeIndex));
        break;
      default:
        break;
    }

    const action = cart.findIndex(
      (cartItem) => cartItem.matchCode === event.matchCode && cartItem.rate === event.rate && cartItem.id === event.id,
    );

    if (action > -1) {
      deleteItem(action);
      return;
    }

    addToCart(event);
  };
  return (
    <div className="table-row-item">
      <div className="table-col-info">{children}</div>
      <div className="table-col-list">
        <div className="col-item">Yorumlar</div>
        <div className="col-item">4</div>
        <div className="col-item" onClick={() => handleClick({ ...matchResultData.host, ...match }, 1)}>
          <span className={`${matchResultActive === 1 ? 'active' : ''}`}>
            <span>{matchResultData.host.rate}</span>
          </span>
        </div>
        <div className="col-item" onClick={() => handleClick({ ...matchResultData.draw, ...match }, 2)}>
          <span className={`${matchResultActive === 2 ? 'active' : ''}`}>
            <span>{matchResultData.draw.rate}</span>
          </span>
        </div>
        <div className="col-item" />
        <div className="col-item" onClick={() => handleClick({ ...lowerUpperData.lower, ...match }, 1)}>
          <span className={`${upperLowerResultActive === 1 ? 'active' : ''}`}>
            <span>{lowerUpperData.lower.rate}</span>
          </span>
        </div>
        <div className="col-item" onClick={() => handleClick({ ...lowerUpperData.upper, ...match }, 2)}>
          <span className={`${upperLowerResultActive === 2 ? 'active' : ''}`}>
            <span>{lowerUpperData.upper.rate}</span>
          </span>
        </div>
        <div className="col-item" />
        <div className="col-item" />
        <div className="col-item" />
        <div className="col-item" />
        <div className="col-item" />
        <div className="col-item" onClick={() => handleClick({ ...doubleResultData.x1, ...match }, 1)}>
          <span className={`${doubleResultActive === 1 ? 'active' : ''}`}>
            <span>{doubleResultData.x1.rate}</span>
          </span>
        </div>
        <div className="col-item" onClick={() => handleClick({ ...doubleResultData.x12, ...match }, 2)}>
          <span className={`${doubleResultActive === 2 ? 'active' : ''}`}>
            <span>{doubleResultData.x12.rate}</span>
          </span>
        </div>
        <div className="col-item" onClick={() => handleClick({ ...doubleResultData.x12, ...match }, 3)}>
          <span className={`${doubleResultActive === 3 ? 'active' : ''}`}>
            <span>{doubleResultData.x2.rate}</span>
          </span>
        </div>
        <div className="col-item" />
        <div className="col-item" />
      </div>
    </div>
  );
}

const itemType = PropTypes.shape({
  id: PropTypes.string,
  rate: PropTypes.string,
  name: PropTypes.string,
});

TableRowItem.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  matchResultData: PropTypes.shape({
    host: PropTypes.shape(itemType.isRequired).isRequired,
    draw: PropTypes.shape(itemType.isRequired).isRequired,
  }),
  lowerUpperData: PropTypes.shape({
    lower: PropTypes.shape(itemType.isRequired).isRequired,
    upper: PropTypes.shape(itemType.isRequired).isRequired,
  }),
  doubleResultData: PropTypes.shape({
    x1: PropTypes.shape(itemType.isRequired).isRequired,
    x12: PropTypes.shape(itemType.isRequired).isRequired,
    x2: PropTypes.shape(itemType.isRequired).isRequired,
  }),
  match: PropTypes.shape().isRequired,
};

export default TableRowItem;
