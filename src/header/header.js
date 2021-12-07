import Catalog from './catalog/catalog';
import Show from './show/show';
import {Routes, Route} from 'react-router-dom';
import MenuList from './menu/menu-list';
import Panel from './panel/panel';

const Header = () => {
  return (
    <header className="main-block-1">
        <div className="main-block-2">
          <div className="m-1">
            <div className="m-g-1">
              <div id="first">
                <div className="m-f-1">
                  <div className="m-f-i-1">
                    <img src="/images/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png" loading="lazy" alt="logo" className="m-p-i-1" />
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
                <div className="m-s">
                  <input type="text" placeholder="Какой препарат мы будем искать?" className="m-s-1" />
                </div>
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
              <Route path="/" element={<Catalog/>}/>
              <Route path="/products/:id" element={<Show/>} />
              <Route path="/foryou" element={<div/>}/>
              <Route path="/basket" element={<div/>}/>
              <Route path="/favourite" element={<div/>}/>
              <Route path="/user" element={<div/>}/>
              {/* <Route path="*" element={<div>Not found</div>} /> */}
            </Routes>
          </div>
        </div>
      </header>
  );
}

export default Header;
