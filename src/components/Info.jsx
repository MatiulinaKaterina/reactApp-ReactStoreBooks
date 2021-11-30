import React from 'react';
import {AppContext} from '../components/CatalogProducts';
import { useContext } from 'react';


 function Info ({ title, image, description }){
  const { setBaskedOpebed } = useContext(AppContext);

  return (
    <div className="cartEmpty d-flex align-center justify-center flex-column flex">
      <img className="mb-20" width="120px" src={image} alt="Empty" />
      <h2>{title}</h2>
      <p className="opacity-6">{description}</p>
      <button onClick={() => setBaskedOpebed(false)} className="greenButton">
        <img src="/img/arrow.svg" alt="Arrow" />
        Вернуться назад
      </button>
    </div>
  );
};

export default Info;