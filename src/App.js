import { Route, Switch, useHistory } from 'react-router';
import './App.css';
import { RegistrationForm } from './components/RegistrationForm'
import CatalogProducts from './components/CatalogProducts'
import { useState } from "react"
import { ErrorRegistration } from './components/ErrorRegistration'


function App() {
  const [users] = useState([
    {
      userName: '1',
      password: 'qwerty',
      isAdmin: false
    },
    {
      userName: '2',
      password: 'qwerty',
      isAdmin: true
    }
  ]);

  const [userNameInput, setUserName] = useState('');
  const [passwordInput, setpasswordInput] = useState('');
  const [isAdmin, setIsAdmin] = useState(true);
  const history = useHistory();
  const [errorRegistr, setErrorRegistr] = useState(false);
  const [userNameError, setUserNameError] = useState('');
  const [passwordError, setpasswordError] = useState('');

  const handleUserName = (event) => {
    setUserName(event.target.value)
    if (!event.target.value) {
      setUserNameError('Поле не может быть пустым')
    } else{
      setUserNameError('')
    }
  };
  const handlePassword = (event) => {
    setpasswordInput(event.target.value);
    if (!event.target.value) {
      setpasswordError('Поле не может быть пустым')
    }else{
      setpasswordError('')
    }
  };
  const validationForm = function () {
    let invalid = true;
    if (!passwordInput) {
      setpasswordError('Поле не может быть пустым')
      invalid = false;
    } else {
      setpasswordError('')
    }
    if (!userNameInput) {
      setUserNameError('Поле не может быть пустым')
      invalid = false;
    } else {
      setUserNameError('')
    }
    if (!invalid) return false;
    else return true;
  }
  const authorization = users.filter(item => {
    return item.userName == userNameInput && item.password == passwordInput
  })
  const onClickEnter = (event) => {
    event.preventDefault()
    if (validationForm()) {
      authorization.find(item => {
        if (item.isAdmin) {
          setIsAdmin(true)
        } else {
          setIsAdmin(false)
        }
      })
      if (!authorization.length) {
        setUserName('')
        setpasswordInput('')
        setErrorRegistr(true)
      } else {
        history.push('/card');
      }
    }
  }

  return (
    <div>
      <Switch>
        <Route path='/' exact>
          {errorRegistr &&
            <ErrorRegistration onCloseError={() => {
              setErrorRegistr(false)
              window.location.reload();
            }} />
          }
          <RegistrationForm
            userNameInput={userNameInput}
            userNameError={userNameError}
            passwordError={passwordError}
            errorRegistr={errorRegistr} onClickEnter={onClickEnter}
            handleUserName={handleUserName} handlePassword={handlePassword} />
        </Route>
        <Route path='/card'>
          <CatalogProducts isAdmin={isAdmin} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
