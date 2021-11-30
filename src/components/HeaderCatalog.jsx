import React from 'react';
import { useHistory } from 'react-router';
import { useBasket } from '../hooks/useBasket'
import Basket from "./Basket";
import { useContext } from 'react';
import { AppContext } from './CatalogProducts';
import { Link } from 'react-router-dom';


function HeaderCatalog(props) {
  const { totalPrice } = useBasket();
  const { booksInBasket, setBaskedOpebed, basketOpened, onClickDelete } = useContext(AppContext);
  const history = useHistory();

  const onClickUser = () => {
    history.push('/')
    window.location.reload()
  }

  return (
    <header className="d-flex justify-between align-center p-40">
      {(basketOpened && !props.isAdmin)  && <Basket key={booksInBasket.id}
        items={booksInBasket}
        onCloseBasked={() => setBaskedOpebed(false)}
        onRemove={onClickDelete} />}
      <Link to='/card'>
        <div className="d-flex align-center">
          <img width={50} height={50} src="/img/logo-2.png" alt='' />
          <div>
            <h3 className="text-uppercase">React Store Books</h3>
            <p className="opacity-5">Книжный магазин</p>
          </div>
        </div>
      </Link>
      <ul className="d-flex">
        <li className="mr-30">
          <img onClick={props.onClickBasket} className='cu-p' width={18} height={18} src="/img/cart.svg" alt='' />
          <span>{totalPrice} руб.</span>
        </li>
        <li>
          <img className='cu-p' onClick={() => onClickUser()} width={18} height={18} src="/img/user.svg" alt='Выйти' title="Выйти" />
        </li>
      </ul>
    </header>
  );
}

export default HeaderCatalog;