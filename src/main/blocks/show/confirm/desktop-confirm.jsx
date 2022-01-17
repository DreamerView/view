import { useState,useEffect } from 'react';
import { getFirestore,doc, getDoc } from "firebase/firestore";
import { useParams,Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const DesktopConfirm = (close) => {
    const {id} = useParams();
    const [productitem,setProductItem] = useState('');
    const [lazy,setLazyBlock] = useState('');
    const local = useSelector(state=>state.cash);
    useEffect(()=>{
      setLazyBlock(false);
      let check = true;
      const db = getFirestore();
      getDoc(doc(db,'list',id)).then((docSnap)=>{
        if(docSnap.exists()) {
          const s = docSnap.data();
          if(check) { 
              setProductItem(
                  {title:s.title,price:s.price,image:s.image}
              );
              setLazyBlock(true);
          }
        }
        else console.log("error. Don't exist!");
      });
      return () => {
        check=false;
      };
    },[id]);
    const ScrollToTop = () =>{
      window.scrollTo({
        top:0,
        behavior: 'smooth'
      });
      document.getElementsByTagName('html')[0].style.cssText= "";
    };
    let word;
      switch(local) {
        case 1: word='товар';break;
        default: word='товара';break;
      }
      useEffect(()=>{
        document.getElementsByTagName('html')[0].style.cssText= "overflow-y:hidden;";
      },[]);
    return(
        <div className='basket-float-window-fixed'>
        <div className='basket-float-window-fixed-back' onClick={()=>{close.close(false);document.getElementsByTagName('html')[0].style.cssText= "";}}></div>
        <div className="basket-float-window">
  <div className="place-block-text">
    <div className="block-text-basket">
      <div className="place-text-basket">
        <h1 className="text-basket-name">Товар добавлен в корзину</h1>
      </div>
      <div className="place-close-basket-block">
        <div onClick={()=>{close.close(false);document.getElementsByTagName('html')[0].style.cssText= "";}} className="close-basket-block">
          <div className="close-place">
            <img src={`${process.env.PUBLIC_URL}/images/close.svg`} alt="close" className="close-img" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="place-block-text">
    <div className="block-basket-width">
      <div className="block-basket-img">
        <img src={lazy?`${process.env.PUBLIC_URL+productitem.image}`:`${process.env.PUBLIC_URL}/images/first-aid-alt.svg`} alt="drug" className="drug-img-basket" />
      </div>
      <div className="block-basket-characteristic">
        {lazy?<h1 className="basket-otriv-text">{productitem.title}</h1>:<div className="skeleton basket-otriv-text-loader"/>}
        <div className="block-price-company-place">
          <div className="block-price-company">
            {lazy?<h1 className="price-basket">{productitem.price} ₸</h1>:<div className="skeleton price-basket-loader"/>}
            <div className="place-company-name">
              {lazy?<><h1 className="company-name">Продавец:</h1> <a href="s" className="company-name-green">{close.atr.from}</a></>:<div className="skeleton company-name-loader"/>}
            </div>
          </div>
        </div>
        <div className="some-items-place">
          {lazy?<h1 className="company-name">У вас в корзине {local} {word}</h1>:<div className='skeleton company-names-loader'/>}
        </div>
        <div className="place-button-block-basket">
          <div className="button-block-basket">
            {lazy?<Link onClick={ScrollToTop} to={`/basket`} className="basket-button-join">Перейти в корзину</Link>:<Link onClick={ScrollToTop} to={`${process.env.PUBLIC_URL}`} className="basket-button-join"><img src={process.env.PUBLIC_URL+"/images/loader.svg"} alt="" loading="lazy" className="show-button-loader" /></Link>}
            <div className="place-continue-buying">
              {lazy?<button onClick={()=>{close.close(false);document.getElementsByTagName('html')[0].style.cssText= "";}} className="continue-buying">Продолжить покупки</button>:<div className="skeleton continue-buying-loader"/>}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
    );
};

export default DesktopConfirm;