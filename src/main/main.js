import {lazy,Suspense} from 'react';
import {Routes, Route} from 'react-router-dom';
const Block1 = lazy(()=> import('./blocks/block-1'));
const Block2 = lazy(()=> import('./blocks/block-2'));
const ShowInfo = lazy(()=> import('./blocks/show/show'));
const Basket = lazy(()=> import('./basket/basket'));
const LoginForm = lazy(()=> import('./login/login.js'));
const NotFoundPage = lazy(()=> import('./blocks/notfound'));

const Main = () => {
    return(
        <main>
            <Routes>
              <Route path={"/"} element={<Suspense fallback={<div className='lazy-loading'><img loading='lazy' className='lazy-loading-img' src={process.env.PUBLIC_URL+"/images/lazy.svg"} alt="lazy"/></div>}><Block1/><Block2/></Suspense>}/>
              <Route path={"/foryou"} element={<div/>}/>
              <Route path={"/basket"} element={<Suspense fallback={<div className='lazy-loading-1'><img loading='lazy' className='lazy-loading-img' src={process.env.PUBLIC_URL+"/images/lazy.svg"} alt="lazy"/></div>}><Basket/></Suspense>}/>
              <Route path={"/favourite"} element={<div/>}/>
              <Route path={"/user"} element={<Suspense fallback={<div className='lazy-loading-1'><img loading='lazy' className='lazy-loading-img' src={process.env.PUBLIC_URL+"/images/lazy.svg"} alt="lazy"/></div>}><LoginForm/></Suspense>}/>
              <Route path={"/products/:id"} element={<Suspense fallback={<div className='lazy-loading-1'><img loading='lazy' className='lazy-loading-img' src={process.env.PUBLIC_URL+"/images/lazy.svg"} alt="lazy"/></div>}><ShowInfo/></Suspense>}/>
              <Route path={"/*"} element={<Suspense fallback={<div className='lazy-loading-1'><img loading='lazy' className='lazy-loading-img' src={process.env.PUBLIC_URL+"/images/lazy.svg"} alt="lazy"/></div>}><NotFoundPage/></Suspense>}/>
            </Routes>
        </main>
    );
};

export default Main;