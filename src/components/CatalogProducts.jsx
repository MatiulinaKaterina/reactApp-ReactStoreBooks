import React from 'react';
import { useState } from "react"
import { Card } from "./Card"
import { AddCard } from './AddCard'
import HeaderCatalog from "./HeaderCatalog";
import { Route, useRouteMatch, Switch } from "react-router";
import { Product } from "./Product";
import { BOOKS } from '../constants/books'
import { SortBooks } from "./SortBooks";

export const AppContext = React.createContext({})

function CatalogProducts({ isAdmin }) {
    let { path } = useRouteMatch();
    let [books, setBooks] = useState(BOOKS);
    const [searchInput, setSearchInput] = useState('');
    const [stateFilter, setStateFilter] = useState({
        fiction: false,
        business: false,
        psychology: false,
    });
    const [stateRadioSort, setStateRadioSort] = useState('alphabet');
    const [basketOpened, setBaskedOpebed] = useState(false);
    const [booksInBasket, setBooksInBasket] = useState([]);

    const onAddToBasket = (obj) => {
        if (booksInBasket.find((item) => item.id === obj.id)) {
            setBooksInBasket(prev => prev.filter(item => item.id !== obj.id))
        } else {
            setBooksInBasket(prev => [...prev, obj])
        }
    }

    const onEdit = (obj) => {
        const unpdatedItems = books.map(item => {
            if (item.id === obj.id) {
                return { ...obj };
            } return item;
        })
        setBooks(unpdatedItems)
    }

    const onClickDelete = (id) => {
        setBooksInBasket(prev => prev.filter(item => item.id !== id))
    }
    const onClickDeleteBooks = (id) => {
        setBooks(prev => prev.filter(item => item.id !== id))
    }

    const filteredBooks = books.filter(book => {
        return book.name.toLowerCase().includes(searchInput.toLowerCase())
    });

    const handleCheckboxFiction = (event) => {
        const { value } = event.target
        const checked = stateFilter.fiction
        setStateFilter(prevState => ({
            ...prevState,
            [value]: !checked
        }))
    }
    const handleCheckboxBusiness = (event) => {
        const { value } = event.target
        const checked = stateFilter.business
        setStateFilter(prevState => ({
            ...prevState,
            [value]: !checked
        }))
    }
    const handleCheckboxPsychology = (event) => {
        const { value } = event.target
        const checked = stateFilter.psychology
        setStateFilter(prevState => ({
            ...prevState,
            [value]: !checked
        }))
    }

    const filterCheck = () => {
        let newArray = []
        for (let key in stateFilter) {
            if (stateFilter[key]) {
                let arrayFilter = filteredBooks.filter(item => {
                    return item.category === key
                })
                newArray = [...newArray, ...arrayFilter]
            };
        };
        if (newArray.length)
            return newArray
        return filteredBooks
    }
    const resultFilter = filterCheck()

    const handleRadioAlphabet = (event) => {
        setStateRadioSort(event.target.value)
    }

    const handleRadioCount = (event) => {
        setStateRadioSort(event.target.value)
    }

    const handleRadioPrice = (event) => {
        setStateRadioSort(event.target.value)
    }

    const handleRadioDate = (event) => {
        setStateRadioSort(event.target.value)
    }

    const radioSort = function (array, value) {
        let resultSortArray = [];
        if (value) {
            let sortArray = [];
            if (value === 'alphabet') {
                sortArray = array.sort((a, b) => {
                    return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
                });
            } else {
                if (value === 'price') {
                    sortArray = array.sort((a, b) => a.price - b.price);
                } else {
                    if (value === 'count') {
                        sortArray = array.sort((a, b) => a.count - b.count);

                    } else {
                        if (value === 'date') {
                            sortArray = array.sort((a, b) => new Date(b.date) - new Date(a.date));
                        }
                    }
                    resultSortArray = sortArray;
                }
            }
        }
        if (resultSortArray.length) {
            return resultSortArray;
        } else {
            return array;
        };
    };
    radioSort(resultFilter,stateRadioSort)
    const isItemAdded = (id) => {
        return booksInBasket.some(obj => obj.id === id)
    }


    return (
        <AppContext.Provider value={{isAdmin, books, setBooks, booksInBasket, setBooksInBasket, isItemAdded, setBaskedOpebed, basketOpened, onClickDelete }}>
            <Switch>
                <Route path={path} exact>
                    <div className="wrapper clear">
                        <HeaderCatalog isAdmin= {isAdmin} onClickBasket={() => setBaskedOpebed(true)} />
                        {isAdmin && <AddCard />}
                        <div className="content p-40">
                            <div className="d-flex align-center justify-between mb-40">
                                <h1>{searchInput ? `Поиск по запросу: "${searchInput}"` : `Все книги`}</h1>
                                <div className="search-block d-flex">
                                    <img src="/img/search.svg" alt="Search" />
                                    <input onChange={(event) => setSearchInput(event.target.value)} value={searchInput} placeholder="Поиск..." />
                                </div>
                            </div>

                            <div className="d-flex justify-between">
                                <div className="d-flex flex-wrap justify-center card-products">
                                    {resultFilter.map(book =>
                                        (!isAdmin && book.count !== 0) ?
                                            <Card
                                                key={book.id}
                                                {...book}
                                                onPlus={(obj) => onAddToBasket(obj)}
                                                isAdmin={isAdmin}
                                                onEdit={(obj) => onEdit(obj)}
                                                onClickDeleteBooks={(id) => onClickDeleteBooks(id)}
                                            /> :
                                            (isAdmin) &&
                                            <Card
                                                key={book.id}
                                                {...book}
                                                onPlus={(obj) => onAddToBasket(obj)}
                                                isAdmin={isAdmin}
                                                onEdit={(obj) => onEdit(obj)}
                                                onClickDeleteBooks={(id) => onClickDeleteBooks(id)}
                                            />
                                    )}
                                </div>
                                <div className="d-flex flex-column category">
                                    <div>
                                        <form className="d-flex flex-column">
                                            <h3>Категории</h3>
                                            <label >
                                                <input className=''
                                                    type='checkbox'
                                                    name='checkboxCategories'
                                                    value='fiction'
                                                    checked={stateFilter.fiction}
                                                    onChange={handleCheckboxFiction}

                                                /> Художественная литература</label>
                                            <label >
                                                <input className=''
                                                    type='checkbox'
                                                    name='checkboxCategories'
                                                    value='business'
                                                    checked={stateFilter.business}
                                                    onChange={handleCheckboxBusiness}
                                                /> Деловая литература</label>
                                            <label >
                                                <input className=''
                                                    type='checkbox'
                                                    name='checkboxCategories'
                                                    value='psychology'
                                                    checked={stateFilter.psychology}
                                                    onChange={handleCheckboxPsychology}
                                                /> Психология</label>
                                        </form>
                                    </div>
                                    <SortBooks handleRadioAlphabet={handleRadioAlphabet}
                                        handleRadioCount={handleRadioCount}
                                        handleRadioPrice={handleRadioPrice}
                                        handleRadioDate={handleRadioDate} />
                                </div>
                            </div>
                        </div>
                    </div>
                </Route>
                <Route path={'/card/:productId'}>
                    <Product isAdmin= {isAdmin} books={books} onPlus={(obj) => onAddToBasket(obj)} onClickBasket={() => setBaskedOpebed(true)} />
                </Route>
            </Switch>
        </AppContext.Provider>
    )
}

export default CatalogProducts;