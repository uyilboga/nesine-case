import React, { useContext } from 'react';
import { EventContext } from '@/contexts/EventContext';

function Cart() {
  const { cart } = useContext(EventContext);
  const total = cart.reduce((acc, item) => acc * Number(item.rate), 1);

  return (
    <div className="cart">
      <div className="cart-content">
        <div className="cart-list">
          {cart?.map((item) => (
            <div key={`${item.id}-${item.rate}-${item.matchCode}`} className="cart-list-item">
              <div className="cart-item">
                <span>4</span> <span> Kod: {item.matchCode}</span> <span>Maç:{item.matchName}</span>
              </div>
              <div className="cart-item">
                <span>Oran:{item.rate}</span> <span>MBS:{item.mbs}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="total">
          Toplam Tutar: <b>{total !== 1 ? total.toFixed(2) : 0}</b>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Cart);
