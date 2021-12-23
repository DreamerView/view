import Catalog from './catalog/catalog';
import Show from './show/show';
import {Routes, Route} from 'react-router-dom';
import MenuList from './menu/menu-list';
import Panel from './panel/panel';
import GetHistoryLocation from '../locate';
import Search from './search/search.jsx';

const Header = () => {
  return (
    <header className="main-block-1">
        <div className="main-block-2">
          <div className="m-1">
            <div className="m-g-1">
              <div id="first">
                <div className="m-f-1">
                  <div className="m-f-i-1">
                    <img src={GetHistoryLocation+"/images/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"} loading="lazy" alt="logo" className="m-p-i-1" />
                  </div>
                  <div className="m-f-b">
                    <div className="m-f-b-1" />
                  </div>
                  <div className="m-f-t">
                    <h1 className="m-f-t-1">Аптека</h1>
                  </div>
                </div>
              </div>
              <div id="second">
                <Search/>
              </div>
              <div id="third">
                <div className="m-p-i">
                    <Panel/>        
                </div>
              </div>
            </div>
            {/*  Меню  */}
            <MenuList/>
            {/* Catalog */}
            <Routes>
              <Route path={GetHistoryLocation+"/"} element={<Catalog/>}/>
              <Route path={GetHistoryLocation+"/products/:id"} element={<Show/>} />
              <Route path={GetHistoryLocation+"/foryou"} element={<div/>}/>
              <Route path={GetHistoryLocation+"/basket"} element={<div/>}/>
              <Route path={GetHistoryLocation+"/favourite"} element={<div/>}/>
              <Route path={GetHistoryLocation+"/user"} element={<div/>}/>
              <Route path={GetHistoryLocation+"/*"} element={<div/>}/>
              {/* <Route path="*" element={<div>Not found</div>} /> */}
            </Routes>
          </div>
        </div>
      </header>
  );
}

export default Header;
