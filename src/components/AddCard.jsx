import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useState } from "react";
import { AppContext } from './CatalogProducts'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

export function AddCard() {
    const classes = useStyles();

    const [countForId, setCountForId] = useState(10);
    const [nameInput, setNameInput] = useState('');
    const [autorInput, setAutorInput] = useState('');
    const [priceInput, setPriceInput] = useState('');
    const [countInput, setCountInput] = useState('');
    const [pictureInput, setPictureInput] = useState('');
    const [descInput, setDescInput] = useState('')
    const [artInput, setArtInput] = useState('');
    const [dateInput, setDateInput] = useState('');
    const [nameError, setNameError] = useState('Поле не может быть пустым');
    const [autorError, setAutorError] = useState('Поле не может быть пустым');
    const [priceError, setPriceError] = useState('Поле не может быть пустым');
    const [countError, setCountError] = useState('Поле не может быть пустым');
    const [artError, setArtError] = useState('Поле не может быть пустым');
    const [dateError, setDateError] = useState('Введите дату');
    const [nameDirty, setNameDirty] = useState(false);
    const [autorDirty, setAutorDirty] = useState(false);
    const [priceDirty, setPriceDirty] = useState(false);
    const [countDirty, setCountDirty] = useState(false);
    const [artDirty, setArtDirty] = useState(false);
    const [dateDirty, setDateDirty] = useState(false);
    const [radioAddDirty, setRadioAddDirty] = useState(false)
    const [addStateGenre, setAddStateGenre] = useState('')
    const [radioError, setRadioError] = useState('');
    const { books, setBooks } = useContext(AppContext);

    const handleChangeName = (event) => {
        setNameInput(event.target.value)
        if (event.target.value.length < 4) {
            setNameError('Менее 4 символов')
            if (!event.target.value) {
                setNameError('Поле не может быть пустым')
            }
        } else {
            setNameError('')
        }
    }
    const handleChangeAutor = (event) => {
        setAutorInput(event.target.value)
        if (event.target.value.length < 4) {
            setAutorError('Менее 4 символов')
        } else {
            setAutorError('')
        }
    }
    const handleChangePrice = (event) => {
        setPriceInput(event.target.value)
        let validPriceValue = /^[0-9]*[.]?[0-9]+$/
        if (!validPriceValue.test(event.target.value)) {
            setPriceError('не должно содержать текстовые символы')
            if (!event.target.value) {
                setPriceError("Поле не может быть пустым")
            }
        } else {
            setPriceError('')
        };
    }
    const handleChangeCount = (event) => {
        setCountInput(event.target.value)
        if (event.target.value % 1) {
            setCountError('не должно быть дробным')

        } else {
            if (!event.target.value) {
                setCountError('Поле не может быть пустым')
            } else {
                setCountError('')
            }

        }
    }
    const handleChangeArt = (event) => {
        setArtInput(event.target.value)
        let validAricleValue = /([A-Z]{1})+[0-9]{2,}/;
        if (!validAricleValue.test(event.target.value)) {
            setArtError(`введите одну заглавную латинскую 
            букву и далее не менее двух цифр`)
        } else {
            setArtError('')
        };
    }
    const handleChangeDescr = (event) => {
        setDescInput(event.target.value)
    }
    const handleChangePicture = (event) => {
        setPictureInput(event.target.value)
    }
    const handleChangeDate = (event) => {
        setDateInput(event.target.value)
        if (!event.target.value) {
            setDateError()
        } else {
            setDateError('')
        }
    }
    const handleRadioFiction = (event) => {
        setAddStateGenre(event.target.value)
        if (!addStateGenre) {
            setRadioError()
        } else {
            setRadioError('')
        }
    }

    const handleRadioBusiness = (event) => {
        setAddStateGenre(event.target.value)
        if (!addStateGenre) {
            setRadioError()
        } else {
            setRadioError('')
        }
    }

    const handleRadiopsychology = (event) => {
        setAddStateGenre(event.target.value)
        if (!addStateGenre) {
            setRadioError()
        } else {
            setRadioError('')
        }
    }

    const blurHandle = (e) => {
        switch (e.target.name) {
            case 'name':
                setNameDirty(true)
                break
            case 'price':
                setPriceDirty(true)
                break
            case 'autor':
                setAutorDirty(true)
                break
            case 'count':
                setCountDirty(true)
                break
            case 'art':
                setArtDirty(true)
                break
            case 'date':
                setDateDirty(true)
                break
        }
    }
    const validationForm = function () {
        let invalid = true;
        if (nameInput.length < 4) {
            setNameError('Менее 4 символов')
            if (!nameInput) {
                setNameError('Поле не может быть пустым')
                setNameDirty(true)
                invalid = false;
            }
        } else {
            setNameError('')
        }
        if (autorInput.length < 4) {
            setAutorError('Менее 4 символов');
            if (!autorInput) {
                setAutorError('Поле не может быть пустым');
                setAutorDirty(true)
                invalid = false;
            }
        } else {
            setAutorError('')
        }
        if (!addStateGenre) {
            setRadioError('Поле не может быть пустым');
            setRadioAddDirty(true);
            invalid = false;
        } else {
            setRadioError('');
        }
        let validPriceValue = /^[0-9]*[.]?[0-9]+$/
        if (!validPriceValue.test(priceInput)) {
            setPriceError('не должно содержать текстовые символы')
            if (!priceInput) {
                setPriceError('Поле не может быть пустым')
                setPriceDirty(true)
                invalid = false;
            }
        } else {
            setPriceError('')
        };
        if (!countInput) {
            setCountError('Поле не может быть пустым')
            setCountDirty(true)
            invalid = false;
        } else {
            if (countInput % 1) {
                setCountError('не должно быть дробным')
                setCountDirty(true)
                invalid = false;
            } else {
                setCountError('')
            }
        }
        if (!artInput) {
            setArtError('Поле не может быть пустым');
            setArtDirty(true);
            invalid = false;
        } else {
            let validAricleValue = /([A-Z]{1})+[0-9]{2,}/;
            if (!validAricleValue.test(artInput)) {
                setArtError(`должно содержать одну заглавную латинскую 
            букву и далее не менее двух цифр`)
                setArtDirty(true);
                invalid = false;
            } else {
                setArtError('')
            }
        }

        if (!dateInput) {
            setDateError('Введите дату')
            setDateDirty(true)
            invalid = false;
        } else {
            setDateError('')
        }
        if (!invalid) return false;
        else return true;
    }
    const addItem = (event) => {
        event.preventDefault()
        if (validationForm()) {
            const newItem = {
                name: nameInput,
                price: priceInput,
                autor: autorInput,
                count: countInput,
                art: artInput,
                picture: pictureInput,
                description: descInput,
                date: new Date(dateInput).toLocaleDateString(),
                category: addStateGenre,
                id: countForId + 1
            };
            setBooks([...books, newItem]);
            setCountForId(countForId + 1);
            setNameInput('');
            setAutorInput('');
            setPriceInput('');
            setCountInput('');
            setPictureInput('');
            setDescInput('');
            setArtInput('');
            setDateInput('');
            setAddStateGenre('');
        }
    }

    return (
        <div className={classes.root}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <h3>Добавить товар</h3>
                </AccordionSummary>
                <AccordionDetails>
                    <form className='d-flex flex-row justify-around w100p'>
                        <div className='d-flex flex-column'>
                            <div className='div-add'>
                                <label><input onBlur={blurHandle}
                                    onChange={handleChangeName}
                                    value={nameInput} type='text'
                                    name='name'
                                    className='input-add' /> Название</label>
                                {(nameDirty && nameError) && <div className='error'>{nameError}</div>}
                            </div>
                            <div className='div-add'>
                                <label><input onBlur={blurHandle}
                                    onChange={handleChangeAutor}
                                    type='text' name='autor'
                                    value={autorInput}
                                    className='input-add' /> Автор</label>
                                {(autorDirty && autorError) && <div className='error'>{autorError}</div>}
                            </div>
                            <div className='div-add'>
                                <label><input name='art'
                                    onBlur={blurHandle}
                                    onChange={handleChangeArt}
                                    value={artInput}
                                    type='text'
                                    className='input-add' /> Артикул</label>
                                {(artDirty && artError) && <div className='error'>{artError}</div>}
                            </div>
                            <div className='div-add'>
                                <label><input name='count'
                                    type='number'
                                    onBlur={blurHandle}
                                    onChange={handleChangeCount}
                                    value={countInput} min='0y'
                                    className='input-add' /> Количество</label>
                                {(countDirty && countError) && <div className='error'>{countError}</div>}
                            </div>
                            <div className='div-add'>
                                <label><input onBlur={blurHandle}
                                    value={priceInput}
                                    onChange={handleChangePrice}
                                    type='text'
                                    name='price'
                                    className='input-add' /> Стоимость</label>
                                {(priceDirty && priceError) && <div className='error'>{priceError}</div>}
                            </div>
                            <div className='div-add'>
                                <label><input onChange={handleChangeDate}
                                    value={dateInput} name='date' type='date' className='input-add' /> Дата</label>
                                {(dateDirty && dateError) && <div className='error'>{dateError}</div>}
                            </div>
                        </div>
                        <div className='d-flex flex-column'>
                            <div className='div-add-category'>
                                <label className="d-flex align-start">
                                    <input className='label-m-10'
                                        onChange={handleRadioFiction}
                                        type='radio'
                                        name='radioAdd'
                                        value='fiction'
                                        checked={addStateGenre ? true : false}
                                    />Художественная литература</label>
                                <label className="d-flex align-center">
                                    <input className='label-m-10'
                                        onChange={handleRadioBusiness}
                                        type='radio'
                                        name='radioAdd'
                                        value='business'
                                        checked={addStateGenre ? true : false}
                                    />  Деловая литература</label>
                                <label className="d-flex align-center">
                                    <input className='label-m-10'
                                        onChange={handleRadiopsychology}
                                        type='radio'
                                        name='radioAdd'
                                        value='psychology'
                                        checked={addStateGenre ? true : false}
                                    /> Психология</label>
                                {(radioAddDirty && radioError) && <div className='error'>{radioError}</div>}
                            </div>

                            <div className='div-add'>
                                <label><input onChange={handleChangePicture}
                                    name='picture' value={pictureInput}
                                    type='text' className='input-add' /> Картинка</label>
                            </div>
                            <div className='d-flex flex-column justify-between '>
                                <label> <textarea onChange={handleChangeDescr}
                                    value={descInput} name='description'
                                    className='input-add-desc'></textarea> Описание</label>
                            </div>
                            <button onClick={addItem} type='submit' className="greenButton mt-10">
                                Сохранить <img src="/img/arrow.svg" alt="Arrow" />
                            </button>
                        </div>
                    </form>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}