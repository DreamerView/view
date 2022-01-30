import React from 'react';
import {Routes, Route} from 'react-router-dom';
const Block1 = React.lazy(()=> import('./blocks/block-1'));
const Block2 = React.lazy(()=> import('./blocks/block-2'));
const ShowInfo = React.lazy(()=> import('./blocks/show/show'));
const Basket = React.lazy(()=> import('./basket/basket'));
const LoginForm = React.lazy(()=> import('./login/login.js'));
const NotFoundPage = React.lazy(()=> import('./blocks/notfound'));

const Main = () => {
    return(
        <main>
            <Routes>
              <Route path={"/"} element={<React.Suspense fallback={<div className='lazy-loading'><img loading='lazy' className='lazy-loading-img' src={process.env.PUBLIC_URL+"/images/lazy.svg"} alt="lazy"/></div>}><Block1/><Block2/></React.Suspense>}/>
              <Route path={"/foryou"} element={<div/>}/>
              <Route path={"/basket"} element={<React.Suspense fallback={<div className='lazy-loading-1'><img loading='lazy' className='lazy-loading-img' src={process.env.PUBLIC_URL+"/images/lazy.svg"} alt="lazy"/></div>}><Basket/></React.Suspense>}/>
              <Route path={"/favourite"} element={<div/>}/>
              <Route path={"/user"} element={<React.Suspense fallback={<div className='lazy-loading-1'><img loading='lazy' className='lazy-loading-img' src={process.env.PUBLIC_URL+"/images/lazy.svg"} alt="lazy"/></div>}><LoginForm/></React.Suspense>}/>
              <Route path={"/products/:id"} element={<React.Suspense fallback={<div className='lazy-loading-1'><img loading='lazy' className='lazy-loading-img' src={process.env.PUBLIC_URL+"/images/lazy.svg"} alt="lazy"/></div>}><ShowInfo/></React.Suspense>}/>
              <Route path={"/*"} element={<React.Suspense fallback={<div className='lazy-loading-1'><img loading='lazy' className='lazy-loading-img' src={process.env.PUBLIC_URL+"/images/lazy.svg"} alt="lazy"/></div>}><NotFoundPage/></React.Suspense>}/>
            </Routes>
        </main>
    );
};

export default Main;