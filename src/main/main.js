import Block1 from './blocks/block-1';
import Block2 from './blocks/block-2';
import {Routes, Route} from 'react-router-dom';
import ShowInfo from './blocks/show/show';

const Main = () => {
    return(
        <main>
            <Routes>
              <Route path="/" element={<div><Block1/><Block2/></div>}/>
              <Route path="/foryou" element={<div/>}/>
              <Route path="/basket" element={<div/>}/>
              <Route path="/favourite" element={<div/>}/>
              <Route path="/user" element={<div/>}/>
              <Route path="/products/:id" element={<ShowInfo/>}/>
            </Routes>
        </main>
    );
};

export default Main;