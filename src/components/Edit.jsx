
export function Edit({ onCloseEdit, handleChangeName,
    handleChangeAutor, handleChangePrice,handleChangeCount, handleChangePicture, handleChangeArt,
    handleRadioFiction,handleRadioBusiness,handleRadiopsychology,handleChangeDescr,
    radioError,valueName,valueAutor, valuePrice,valueCount,valuePicture,valueArt,valueDesc,
    valueCategory,save,nameError, autorError, priceError,countError,artError}) {
    return (
        <div className='overlay-edit'>
            <div className='edit'>
                <h2>Режим редактирования <img onClick={onCloseEdit} className="cu-p" src="/img/btn-remove.svg" alt="Remove" /></h2>
                <form className='d-flex flex-row justify-around w100p'>
                    <div>
                        <div className='d-flex flex-column div-add'>
                            <label><input type='text' name='name'
                                defaultValue={valueName}
                                onChange={handleChangeName}
                                className='input-add' /> Название</label>
                            {(nameError) && <div className='error'>{nameError}</div>}
                        </div>
                        <div className='d-flex flex-column div-add'>
                            <label><input type='text'
                                defaultValue={valueAutor}
                                onChange={handleChangeAutor}
                                className='input-add' /> Автор</label>
                            {(autorError) && <div className='error'>{autorError}</div>}
                        </div>
                        <div className='d-flex flex-column div-add'>
                            <label><input name='art'
                                defaultValue={valueArt}
                                onChange={handleChangeArt}
                                type='text'
                                className='input-add' /> Артикль</label>
                            {(artError) && <div className='error'>{artError}</div>}
                        </div>
                        <div className='d-flex flex-column div-add'>
                            <label><input type='number' defaultValue={valueCount}
                                onChange={handleChangeCount}
                                min='0' className='input-add' /> Количество</label>
                                {(countError) && <div className='error'>{countError}</div>}
                        </div>
                        <div className='d-flex flex-column div-add'>
                            <label><input type='text'
                                defaultValue={valuePrice}
                                onChange={handleChangePrice}
                                className='input-add' /> Стоимость</label>
                                {(priceError) && <div className='error'>{priceError}</div>}
                        </div>
                    </div>
                    <div className='d-flex flex-column'>
                        <div className='d-flex flex-column div-add-category'>
                            {(radioError) && <div className='error'>{radioError}</div>}
                            <label className="d-flex align-start">
                                <input className='label-m-10'
                                    onChange={handleRadioFiction}
                                    type='radio'
                                    name='radioAdd'
                                    value='fiction'
                                    checked={(valueCategory == 'fiction') ? true : false}
                                />Художественная литература</label>
                            <label className="d-flex align-center" >
                                <input className='label-m-10'
                                    onChange={handleRadioBusiness}
                                    type='radio'
                                    name='radioAdd'
                                    value='business'
                                    checked={(valueCategory == 'business') ? true : false}
                                />  Деловая литература</label>
                            <label className="d-flex align-center" >
                                <input className='label-m-10'
                                    onChange={handleRadiopsychology}
                                    type='radio'
                                    name='radioAdd'
                                    value='psychology'
                                    checked={(valueCategory == 'psychology') ? true : false}
                                /> Психология</label>
                        </div>
                        <div className='d-flex flex-column div-add'>
                            <label><input type='text'
                                defaultValue={valuePicture}
                                onChange={handleChangePicture}
                                className='input-add' /> Картинка</label>
                        </div>
                        <div className='d-flex flex-column'>
                            <label> <textarea onChange={handleChangeDescr}
                                defaultValue={valueDesc} name='description'
                                className='input-add-desc'></textarea>Описание</label>
                        </div>
                    </div>
                </form>
                <button type='submit' onClick={save} className="greenButton">
                    Сохранить <img src="/img/arrow.svg" alt="Arrow" />
                </button>
            </div>
        </div>
    )
}