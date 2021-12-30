import GetHistoryLocation from '../../../../locate';
import { useState,useEffect } from 'react';

import { getFirestore,doc, getDoc } from "firebase/firestore";
import { useParams,Link } from 'react-router-dom';

const DesktopConfirm = (close) => {
    const {id} = useParams();
    const [productitem,setProductItem] = useState('');
    const [lazy,setLazyBlock] = useState('');
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
    };
    return(
        <div className='basket-float-window-fixed'>
        <div className="basket-float-window">
  <div className="place-block-text">
    <div className="block-text-basket">
      <div className="place-text-basket">
        <h1 className="text-basket-name">Товар добавлен в корзину</h1>
      </div>
      <div className="place-close-basket-block">
        <div className="close-basket-block">
          <div className="close-place">
            <img onClick={()=>{close.close(false)}} src={`${GetHistoryLocation}/images/close.svg`} alt="close" className="close-img" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="place-block-text">
    <div className="block-basket-width">
      <div className="block-basket-img">
        <img src={lazy?`${GetHistoryLocation+productitem.image}`:`${GetHistoryLocation}/images/first-aid-alt.svg`} alt="drug" className="drug-img-basket" />
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
          {lazy?<h1 className="company-name">В корзине {localStorage.getItem('basket-info')? JSON.parse(localStorage.getItem("basket-info")).length:"0"} товар на сумму 100 ₸</h1>:<div className='skeleton company-names-loader'/>}
        </div>
        <div className="place-button-block-basket">
          <div className="button-block-basket">
            {lazy?<Link onClick={ScrollToTop} to={`${GetHistoryLocation}/basket`} className="basket-button-join">Перейти в корзину</Link>:<Link onClick={ScrollToTop} to={`${GetHistoryLocation}`} className="basket-button-join"><img src={GetHistoryLocation+"/images/loader.svg"} alt="" loading="lazy" className="show-button-loader" /></Link>}
            <div className="place-continue-buying">
              {lazy?<button onClick={()=>{close.close(false)}} className="continue-buying">Продолжить покупки</button>:<div className="skeleton continue-buying-loader"/>}
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