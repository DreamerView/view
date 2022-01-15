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
              <Route path={process.env.URL_STATE+"/"} element={<div><Block1/><Block2/></div>}/>
              <Route path={process.env.URL_STATE+"/foryou"} element={<div/>}/>
              <Route path={process.env.URL_STATE+"/basket"} element={<Basket/>}/>
              <Route path={process.env.URL_STATE+"/favourite"} element={<div/>}/>
              <Route path={process.env.URL_STATE+"/user"} element={<LoginForm/>}/>
              <Route path={process.env.URL_STATE+"/products/:id"} element={<ShowInfo/>}/>
              <Route path={process.env.URL_STATE+"/*"} element={<NotFoundPage/>}/>
            </Routes>
        </main>
    );
};

export default Main;