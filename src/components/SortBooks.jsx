import React from 'react';

export function SortBooks(props){
    return(
<div>
                                    <form className="d-flex flex-column form-category">
                                        <h3>Сортировать по</h3>
                                        <label className="d-flex align-start">
                                            <input 
                                                type='radio'
                                                name='radioSort'
                                                value='alphabet'
                                                
                                                defaultChecked={true}
                                                onChange={props.handleRadioAlphabet}
                                            /> Алфавиту</label>
                                        <label className="d-flex align-center">
                                            <input 
                                                type='radio'
                                                name='radioSort'
                                                value='count'
                                                onChange={props.handleRadioCount}
                                            /> Количеству</label>
                                        <label className="d-flex align-center">
                                            <input 
                                            
                                                type='radio'
                                                name='radioSort'
                                                value='price'
                                          
                                                onChange={props.handleRadioPrice}
                                            /> Цене</label>
                                        <label className="d-flex align-center">
                                            <input 
                                                type='radio'
                                                name='radioSort'
                                                value='date'
                                                onChange={props.handleRadioDate}
                                            /> Дате</label>
                                    </form>
                                </div>
    )
}