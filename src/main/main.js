import Block1 from './blocks/block-1';
import Block2 from './blocks/block-2';
import {Routes, Route} from 'react-router-dom';
import ShowInfo from './blocks/show/show';
import NotFoundPage from './blocks/notfound';
import Basket from './basket/basket';
import LoginForm from './login/login.js';

const Main = () => {
    return(
        <main>
            <Routes>
              <Route path="/" element={<div><Block1/><Block2/></div>}/>
              <Route path="/foryou" element={<div/>}/>
              <Route path="/basket" element={<Basket/>}/>
              <Route path="/favourite" element={<div/>}/>
              <Route path="/user" element={<LoginForm/>}/>
              <Route path="/products/:id" element={<ShowInfo/>}/>
              <Route path="/*" element={<NotFoundPage/>}/>
            </Routes>
        </main>
    );
};

export default Main;