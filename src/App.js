import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link, Navigate, useParams  } from 'react-router-dom'


import HomePage from './pages/home/homePage'
import NotFoundPage from './pages/404/NotFoundPage'

import ProfilePage from './pages/profile/ProfilePage';
import TasksPage from './pages/tasks/tasksPage';

import LoginPage from './pages/auth/loginPage';
import RegisterLoginPage from './pages/auth/registerLoginPage'

function App() {

  const logged = true;
  return (
    <div className="App">
      <Router>
        <div>
          <aside>
            <Link to='/' > Home </Link>
            <Link to='/login' > Login </Link>
            <Link to='/register' > Register </Link>
            <Link to='/task' > TASK </Link>
          </aside>
          <main>
            <Routes>


              <Route exact path='/' element={<HomePage />} />

              <Route path='/register' element={ !logged ? <RegisterLoginPage></RegisterLoginPage> : <Navigate to={'/'}></Navigate> } />

              <Route path='/profile' element={ logged ? <ProfilePage></ProfilePage>: <Navigate to={'/login'}></Navigate> } />
     
              <Route path='/login' element={logged ? <Navigate to={'/profile'}></Navigate> : <LoginPage></LoginPage> } />

              <Route path='/task' element={ logged ? <TasksPage></TasksPage> : <LoginPage></LoginPage>}></Route>

             
              {/* Page 404 Not Found */}
              <Route path='*' element={<NotFoundPage />} />
            </Routes>

          </main>
        </div>



      </Router>
      
    </div>
  );
}

export default App;
