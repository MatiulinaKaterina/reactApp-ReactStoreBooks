import React from 'react';

export function RegistrationForm(props) {

    return (
        <div>
            <div className="wrapper clear">
                <header className="d-flex justify-between align-center p-40">
                    <div className="d-flex align-center">
                        <img width={50} height={50} src="/img/logo-2.png" alt='' />
                        <div>
                            <h3 className="text-uppercase">React Store Books</h3>
                            <p className="opacity-5">Книжный магазин</p>
                        </div>
                    </div>
                    <ul className="d-flex">
                        <li className="mr-30">
                            <img className='cu-p' width={18} height={18} src="/img/cart.svg" alt='' />
                            <span>0 руб.</span>
                        </li>
                        <li>
                            <img className='cu-p' width={18} height={18} src="/img/user.svg" alt='Выйти' title="Выйти" />
                        </li>
                    </ul>
                </header>
                <div className="content p-40">
                    <form>
                        <div className='form-registration'>
                            <div className="d-flex align-center mb-40">
                                <h1 className='header-registr'>Войти в магазин</h1>
                            </div>
                            <div className='div-add'>
                                <input type='text'
                                    placeholder='Логин'
                                    className='input-add'
                                    value={props.userNameInput}
                                    onChange={props.handleUserName} />
                                {props.userNameError && <div className='error'>{props.userNameError}</div>}
                            </div>
                            <div className='div-add'>
                                <input type='password'
                                    placeholder='Пароль'
                                    className='input-add'
                                    onChange={props.handlePassword} />
                                {props.passwordError && <div className='error'>{props.passwordError}</div>}
                            </div>
                            <div><button type='submit' onClick={props.onClickEnter} className={`${'button_view'}`}>Войти</button></div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}