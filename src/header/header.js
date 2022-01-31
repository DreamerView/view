import {lazy,Suspense} from 'react';
import {Routes, Route} from 'react-router-dom';
import MenuList from './menu/menu-list';
import Panel from './panel/panel';
import Search from './search/search.jsx';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
const Catalog = lazy(()=> import('./catalog/catalog'));
const Show = lazy(()=> import('./show/show'));

const Header = () => {
  const header = useSelector(state=>state.header);
  const mobile = useMediaQuery({ query: `(max-width: 480px)` });
  return (
    <header className="main-block-1">
        <div className="main-block-2">
          <div className="m-1">
            <div className="m-g-1">
              {!header&&mobile?'':<div id="first">
                <div className="m-f-1">
                  <div className="m-f-i-1">
                    <img src={process.env.PUBLIC_URL+"/login-images/Google__G__Logo.svg.png"} loading="lazy" alt="logo" className="m-p-i-1" />
                  </div>
                  <div className="m-f-b">
                    <div className="m-f-b-1" />
                  </div>
                  <div className="m-f-t">
                    <h1 className="m-f-t-1">Аптека</h1>
                  </div>
                </div>
              </div>}
              <div id="second">
                <Search/>
              </div>
              {!header&&mobile?'':<div id="third">
                <div className="m-p-i">
                    <Panel/>        
                </div>
              </div>}
            </div>
            {/*  Меню  */}
            <MenuList/>
            {/* Catalog */}
            <Routes>
              <Route path={"/"} element={<Suspense fallback={<div>Loading</div>}><Catalog/></Suspense>}/>
              <Route path={"/products/:id"} element={<Suspense fallback={<div>Loading</div>}><Show/></Suspense>} />
              <Route path={"/foryou"} element={<div/>}/>
              <Route path={"/basket"} element={<div/>}/>
              <Route path={"/favourite"} element={<div/>}/>
              <Route path={"/user"} element={<div/>}/>
              <Route path={"/*"} element={<div/>}/>
            </Routes>
          </div>
        </div>
      </header>
  );
}

export default Header;
