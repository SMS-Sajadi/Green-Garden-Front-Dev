import {Routes, Route, Navigate} from 'react-router-dom';
import SignUp from './components/SignUp';
import Login from './components/Login';
import ConfirmCode from './components/ConfirmCode';

function App() {
  return (
    <div>
          <Routes >
            <Route path='/login'  element={<Login />}/>
            <Route path='/home'  element={<h1>Home page</h1>}/>

            <Route path='/signUp/confirm' element={<ConfirmCode />}/>
            <Route path='/signUp'  element={<SignUp />}/>
            <Route path='/'  element={<Navigate to={'/signUp'} />}/>



        </Routes>


    </div>
  );
}

export default App;
