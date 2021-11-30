export function ErrorRegistration(props) {
    return (
        <div className='overlay-edit'>
            <div className='error-registration'>
                <h3>Вы ввели неверный логин или пароль </h3>
                <button onClick={props.onCloseError} className='button_view'>OK</button>
            </div>
        </div>
    )
}