import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { AddItemForm } from './components/AddItemForm';
import {EditItem} from './components/ActionComponent/EditItem';

const App = () => {
  return (
    <>
      <Navbar />
      <div className='container mx-auto '>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/adduser' element={<AddItemForm/>}/>
          <Route path='/updateuser' element={<EditItem/>}/>
        </Routes>
      </div>
    </>
  );
};

export default App;
