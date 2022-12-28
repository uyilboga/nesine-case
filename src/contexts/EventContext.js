import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const EventContext = createContext({ cart: [] });

export function EventProvider({ children, data }) {
  const [cart, setCart] = useState(data || []);

  const deleteItem = (index) => {
    cart.splice(index, 1);
    setCart([...cart]);
  };

  const addToCart = (event) => {
    const sameGroupIndex = cart.findIndex((item) => event.id === item.id && event.matchCode === item.matchCode);

    if (sameGroupIndex > -1) {
      cart.splice(sameGroupIndex, 1);
    }

    setCart((prevState) => [...prevState, event]);
  };

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const contextValue = {
    cart,
    deleteItem,
    addToCart,
  };

  return <EventContext.Provider value={contextValue}>{children}</EventContext.Provider>;
}

EventProvider.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.oneOfType([PropTypes.array, PropTypes.arrayOf(PropTypes.array)]),
};
