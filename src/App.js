// import logo from './logo.svg';
import './assets/scss/global.scss'
// import { BITCoinApp } from './pages/BITCoinApp';
import { StatisticPage } from './pages/StatisticPage';
// import { HomePage } from './pages/HomePage';


function App() {
  return (
    <div className="main-app">
      <header className='app-header'>
        <section className='container'>
          <h1>Bitcoin</h1>
        </section>
      </header>
      <main className='container'>
        {/* <BITCoinApp /> */}
        <StatisticPage />
        {/* <HomePage /> */}

      </main>
      <footer>
        <section className='container'>
          BITCoinRights 2022 &copy;
        </section>
      </footer>
    </div>

  );
}

export default App;
