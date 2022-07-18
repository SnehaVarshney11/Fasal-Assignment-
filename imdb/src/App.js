import './App.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Movies from './components/Movies';
import Pagination from './components/Pagination';
import Favourites from './components/Favourites';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<>
          <Banner/>
          <Movies/>
          {/* <Pagination/> */}
        </>}/>
        <Route path='/Favourites' element={<Favourites/>}></Route>
      </Routes>
      {/* <Banner></Banner>
      <Movies></Movies>
      <Pagination></Pagination> */}
    </BrowserRouter>
  );
}

export default App;
