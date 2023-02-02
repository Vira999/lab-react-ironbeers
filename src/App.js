import './App.css';



import Home from './components/HomePage '
import ListBeers from './components/ListBeers'
import RandomBeer from './components/RandomBeer'
import NewBeer from './components/NewBeer'
import SingleBeer from './components/SingleBeer'


import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="container">

      

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/beers' element={<ListBeers />} />
        <Route path='/beers/:beerId' element={<SingleBeer />} />
        <Route path='/random-beer' element={<RandomBeer />} />
        <Route path='/new-beer' element={<NewBeer />} />
       
      </Routes>
      
    </div>
  );
}

export default App;