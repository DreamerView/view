import Block1 from './blocks/block-1';
import Block2 from './blocks/block-2';
import {Routes, Route} from 'react-router-dom';
import ShowInfo from './blocks/show/show';
import GetHistoryLocation from '../locate';

const Main = () => {
    return(
        <main>
            <Routes>
              <Route path={GetHistoryLocation+"/"} element={<div><Block1/><Block2/></div>}/>
              <Route path={GetHistoryLocation+"/foryou"} element={<div/>}/>
              <Route path={GetHistoryLocation+"/basket"} element={<div/>}/>
              <Route path={GetHistoryLocation+"/favourite"} element={<div/>}/>
              <Route path={GetHistoryLocation+"/user"} element={<div/>}/>
              <Route path={GetHistoryLocation+"/products/:id"} element={<ShowInfo/>}/>
            </Routes>
        </main>
    );
};

export default Main;