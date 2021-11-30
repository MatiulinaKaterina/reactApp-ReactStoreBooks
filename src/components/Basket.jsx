import React, { useContext } from 'react';
import { useState } from 'react';
import Info from './Info';
import { useBasket } from '../hooks/useBasket'


function Basket({ onCloseBasked, items = [], onRemove }) {

    const [isOrderComplete, setIsOrderComplete] = useState(false);
    const { setBooksInBasket, totalPrice } = useBasket();
    const onClickOrder = () => {
        setIsOrderComplete(true);
        setBooksInBasket([]);
    }
    
    return (
        <div className="overlay">
            <div className="drawer">
                <h2 className="d-flex justify-between mb-30">
                    Корзина <img onClick={onCloseBasked} className="cu-p" src="/img/btn-remove.svg" alt="Remove" />
                </h2>

                {items.length > 0 ? (
                    <>
                        <div className="items">
                            {items.map(book => (
                                <div key={book.id} className="cartItem d-flex align-center mb-20">
                                    <div
                                        style={{ backgroundImage: `url(${book.picture})` }}
                                        className="cartItemImg"></div>
                                    <div className="mr-20 flex">
                                        <p title={book.name} className="mb-5 card-name"><b>{book.name}</b></p>
                                        <p className="mb-5">{book.autor}</p>
                                        <b>{book.price} руб.</b>
                                    </div>
                                    <img
                                        onClick={() => onRemove(book.id)}
                                        className="removeBtn"
                                        src="/img/btn-remove.svg"
                                        alt="Delete"
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="cartTotalBlock">
                            <ul>
                                <li>
                                    <span>Итого:</span>
                                    <div></div>
                                    <b>{totalPrice} руб.</b>
                                </li>
                            </ul>
                            <button onClick={onClickOrder} className="greenButton">
                                Оформить заказ <img src="/img/arrow.svg" alt="Arrow" />
                            </button>
                        </div>
                    </>
                ) : (
                    <Info
                        title={isOrderComplete ? 'Заказ оформлен!' : 'Корзина пустая'}
                        description={
                            isOrderComplete
                                ? `Ваш заказ #1 скоро будет передан курьерской доставке`
                                : 'Добавьте хотя бы одну книгу, чтобы сделать заказ.'
                        }
                        image={isOrderComplete ? '/img/complete-order.jpg' : '/img/empty-cart.jpg'}
                    />
                )}
            </div>
        </div>
    );
}

export default Basket;
