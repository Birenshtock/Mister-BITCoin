import { HashRouter as Router, Route, Switch, Redirect, Routes, Navigate } from 'react-router-dom';

import { Component } from 'react'
import './assets/scss/global.scss'
import { AppHeader } from './cmps/AppHeader';
import { BITCoinApp } from './pages/BITCoinApp';
import { About } from './pages/About';
import { ContactEdit } from './pages/ContactEdit';
import { StatisticPage } from './pages/StatisticPage';
import { HomePage } from './pages/HomePage';
import { ContactDetails } from './pages/ContactDetails';


const Team = () => {
  return (
    <ul>
      <li>Moshe Leon</li>
      <li>Lala Ben Regev</li>
      <li>Shimon DiCaprio</li>
    </ul>
  )
}

const Vision = () => {
  return (
    <ol>
      <li>Save the world with our robots</li>
      <li>Take over the world with our robots</li>
    </ol>
  )
}


const PrivateRoute = ({ children }) => {
  const isAdmin = true
  return isAdmin ? children : <Navigate to='/contacts' />
  // return isAdmin ? <Route {...props} /> : <Redirect to='/' />
}


class App extends Component {
  state = {
    page: ''
  }
  render() {
    return (
      <Router>

        <div className="main-app" >
          <AppHeader />

          <main className='container'>
            <Routes>


              <Route path='/contact/edit/:id' element={<ContactEdit />} />
              <Route path='/contact/edit/' element={<ContactEdit />} />
              {/* <Route path='/contact/:id' element={<ContactDetails />} /> */}
              <Route path='/contact/:id' element={
                <PrivateRoute>
                  <ContactDetails />

                </PrivateRoute>
              } />


              <Route path='/about' element={<About />}>
                <Route path="team" element={<Team />} />
                <Route path="vision" element={<Vision />} />
              </Route>
              <Route exact path='/' element={<HomePage />} />
              <Route path='/contacts' element={<BITCoinApp />} />
              <Route path='/statistics' element={<StatisticPage />} />

            </Routes>


          </main>
          <footer>
            <section className='container'>
              BITCoinRights 2022 &copy;
            </section>
          </footer>
        </div>

      </Router>

    );
  }
}

export default App;
