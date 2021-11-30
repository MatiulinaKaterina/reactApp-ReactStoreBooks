import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { useState } from "react";
import { Edit } from './Edit'
import { AppContext } from './CatalogProducts';


export function Card({ id, picture, price, name, autor, count, description, category, art, onPlus, isAdmin, onEdit, onClickDeleteBooks }) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [nameInput, setNameInput] = useState('');
  const [autorInput, setAutorInput] = useState('');
  const [priceInput, setPriceInput] = useState(0);
  const [countInput, setCountInput] = useState('');
  const [pictureInput, setPictureInput] = useState('');
  const [artInput, setArtInput] = useState('');
  const [addStateGenre, setAddStateGenre] = useState(category)
  const [descInput, setDescInput] = useState('');
  const [nameError, setNameError] = useState('');
  const [autorError, setAutorError] = useState('');
  const [priceError, setPriceError] = useState('');
  const [countError, setCountError] = useState('');
  const [artError, setArtError] = useState('');
  const { isItemAdded } = useContext(AppContext)

  const handleChangeName = (event) => {
    setNameInput(event.target.value)
    if (event.target.value.length < 4) {
      setNameError('Менее 4 символов')
    } else {
      setNameError('')
    }
  }
  const handleChangeAutor = (event) => {
    setAutorInput(event.target.value);
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
  const handleChangePicture = (event) => {
    setPictureInput(event.target.value)
  }
  const handleChangeArt = (event) => {
    setArtInput(event.target.value)
    let validAricleValue = /([A-Z]{1})+[0-9]{2,}/;
    if (!validAricleValue.test(event.target.value)) {
      setArtError(`введите одну заглавную латинскую 
            букву и не менее двух цифр`)
    } else {
      setArtError('')
    };
  }
  const handleChangeDescr = (event) => {
    setDescInput(event.target.value)
  }
  const handleRadioFiction = (event) => {
    setAddStateGenre(event.target.value)
  }
  const handleRadioBusiness = (event) => {
    setAddStateGenre(event.target.value)
  }
  const handleRadiopsychology = (event) => {
    setAddStateGenre(event.target.value)
  }
  const onClickPlus = () => {
    onPlus({ id, picture, price, name, autor });
  };
  const validationForm = function () {
    let invalid = true;
    if (nameError || autorError || priceError || countError || artError) {
      return invalid = false
    } else {
      return invalid = true;
    }
  }
  const onSaveEdit = () => {
    if (validationForm()) {
      setIsEditMode(false)
      const editedItem = {
        name: nameInput || name,
        autor: autorInput || autor,
        art: artInput || art,
        price: priceInput || price,
        count: countInput || count,
        picture: pictureInput || picture,
        category: addStateGenre || category,
        id: id,
        description: descInput || description,
        date: new Date().toLocaleDateString()
      };
      onEdit(editedItem);
    }
  }
  return (
    <div>
      {isEditMode && <Edit
        valueName={name}
        valueAutor={autor}
        valuePrice={price}
        valueCount={count}
        valuePicture={picture}
        valueArt={art}
        valueDesc={description}
        valueCategory={addStateGenre}
        handleChangeName={(event) => handleChangeName(event)}
        handleChangeAutor={handleChangeAutor}
        handleChangePrice={handleChangePrice}
        handleChangeCount={handleChangeCount}
        handleChangePicture={handleChangePicture}
        handleChangeArt={handleChangeArt}
        handleChangeDescr={handleChangeDescr}
        handleRadioFiction={handleRadioFiction}
        handleRadioBusiness={handleRadioBusiness}
        handleRadiopsychology={handleRadiopsychology}
        onCloseEdit={() => setIsEditMode(false)}
        nameError={nameError}
        autorError={autorError}
        priceError={priceError}
        countError={countError}
        artError={artError}
        save={onSaveEdit} />}
      <div className='card'>
        <Link to={`/card/${id}`}><img height={220} width={140}
          src={picture ? picture : `https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1200px-No-Image-Placeholder.svg.png`}
          alt='' title={(category === 'fiction') ? `Художественная литература`
            : (category == 'business') ? `Деловая литература` :
              (category == 'psychology') ? `Психология` : ''} />
        </Link>
        <div>
          <p lang="ru" title = {name} className='card-name'>{name}</p>
          <h5 className='card-autor'>{autor}</h5>
        </div>
        <div className='d-flex justify-between align-center'>
          <div className='d-flex flex-column'>
            <span className='card-span'>Цена:</span>
            <b className='card-b'>{price} &#8381;</b>
          </div>
          {isAdmin ? <div>
            <img className='plus' onClick={() => setIsEditMode(true)} height={14} width={16} src="/img/edit.png" title = 'Редактировать' alt="Plus" />
            <img className='plus' onClick={() => onClickDeleteBooks(id)} height={14} width={16} src="/img/delete.png" title = 'Удалить' alt="Plus" />
          </div>
            :
            <img className='plus' onClick={onClickPlus} src={isItemAdded(id) ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} title = {isItemAdded(id) ? "Добавлено в корзину" : "Добавить в корзину"} alt="Plus" />}
        </div>
      </div>
    </div>
  );
}