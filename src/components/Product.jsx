import { useParams } from "react-router-dom"
import React from 'react';
import HeaderCatalog from "./HeaderCatalog";
import { useEffect } from "react";
import { useState } from 'react';
import { Link } from "react-router-dom";
import Basket from "./Basket";
import { useContext } from 'react';
import { AppContext } from './CatalogProducts';



export function Product(props) {
    const { productId } = useParams();
    const [book, setBook] = useState('');
    const { isItemAdded, booksInBasket,  setBaskedOpebed ,basketOpened,onClickDelete,isAdmin} = useContext(AppContext)

    useEffect(() => {
        const book = props.books.find(item => item.id == productId);
        setBook(book);
    })
    const onClickPlus = () => {
        props.onPlus({ ...book });
    };
    return (
        <div className="wrapper clear">
            <HeaderCatalog isAdmin = {isAdmin} onClickBasket={() => setBaskedOpebed(true)} />
            <div className="content d-flex p-40">
                <img height={320} width={200} src={book.picture} alt='' />
                <div className='d-flex flex-column'>
                    <div className='card-desc'>
                        <div className='label-product'>Название:</div>
                        <div className='text-product'>{book.name}</div>
                    </div>
                    <div className='card-desc'>
                        <div className='card-span label-product'>Автор:</div>
                        <div className='text-product '>{book.autor}</div>
                    </div>
                    <div className='card-desc'>
                        <div className='label-product'>Артикул:</div>
                        <div className='text-product '>{book.art}</div>
                    </div>
                    <div className='card-desc'>
                        <div className='label-product'>На складе:</div>
                        <div className='text-product '>{book.count}</div>
                    </div>
                    <div className='card-desc'>
                        <div className='label-product'>Описание:</div>
                        <div className='text-product'>{book.description}</div>
                    </div>
                    <div className='card-desc'>
                        <div className='label-product'>Стоимость:</div>
                        <div className='text-product '>{book.price} &#8381;</div>
                    </div>
                     <div className='card-desc'>
                        {!isAdmin && <>
                        <div className='label-product product-buy'>Купить:</div>
                        <div>
                            <img className='plus-product' onClick={onClickPlus} src={isItemAdded(book.id) ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} alt="Plus" />
                        </div></>}
                    </div>
                    <div>
                        {<Link to='/card'><div href="" className="floating-button">Назад</div></Link>}
                    </div>
                </div>

            </div>
        </div>
    )
}