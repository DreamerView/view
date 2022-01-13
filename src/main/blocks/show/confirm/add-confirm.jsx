import GetHistoryLocation from '../../../../locate';
import { useState,useEffect } from 'react';

import { getFirestore,doc, getDoc } from "firebase/firestore";
import { useParams,Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AddConfirm = (close)=> {
    const {id} = useParams();
    const [productitem,setProductItem] = useState('');
    const [lazy,setLazyBlock] = useState(false);
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
          top:0
        });
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
        <div className="mobile-main-confirm-fixed" onClick={()=>{close.close(false);document.getElementsByTagName('html')[0].style.cssText= "";}}>
            <div className="mobile-main-confirm-fixed-back"></div>
            <div className="mobile-main-confirm">
                <div className="mobile-main-confirm-close">
                    <div onClick={()=>{close.close(false)}} className="mobile-main-confirm-close-picture">
                        <img className="mobile-main-confirm-close-image" src={`${GetHistoryLocation}/images/close.svg`} alt="Close"/>
                    </div>
                </div>
                <h1 className="mobile-main-confirm-main-text">Товар добавлен в корзину</h1>
                <div className="mobile-main-confirm-flex">
                    <div className="mobile-main-confirm-flex-1">
                        <img className='mobile-main-confirm-flex-1-images' src={lazy?`${GetHistoryLocation+productitem.image}`:`${GetHistoryLocation}/images/first-aid-alt.svg`} alt="info-images" />
                    </div>
                    <div className="mobile-main-confirm-flex-2">
                        <div className="mobile-main-confirm-flex-2-block">
                            {lazy?<h1 className="mobile-main-confirm-flex-2-main-text">{productitem.title}</h1>:<div className="skeleton mobile-main-confirm-flex-2-main-text-loader"/>}
                            <div className="mobile-main-confirm-flex-2-block-flex">
                                {lazy?<h1 className="mobile-main-confirm-flex-2-block-flex-price">{productitem.price} ₸</h1>:<div className='skeleton mobile-main-confirm-flex-2-block-flex-price-loader'/>}
                                <div className="mobile-main-confirm-flex-2-block-flex-block">
                                    {lazy?<><h1 className="mobile-main-confirm-flex-2-block-flex-block-text">Продавец:</h1><a className="mobile-main-confirm-flex-2-block-flex-block-nav" href="s">{close.atr.from}</a></>:<div className="skeleton mobile-main-confirm-flex-2-block-flex-block-text-loader"/>}
                                </div>
                            </div>
                            {lazy?<p className="mobile-main-confirm-flex-2-main-content">У вас в корзине {local} {word}</p>:<div className="skeleton mobile-main-confirm-flex-2-main-content-loader"/>}
                        </div>
                    </div>
                </div>
                <div className="mobile-main-confirm-action">
                    {lazy?<Link onClick={ScrollToTop} to={`${GetHistoryLocation}/basket`} className="mobile-main-confirm-action-b">Перейти в корзину</Link>:<Link onClick={ScrollToTop} to={`${GetHistoryLocation}`} className="mobile-main-confirm-action-b"><img src={GetHistoryLocation+"/images/loader.svg"} alt="" loading="lazy" className="show-button-loader" /></Link>}
                    {lazy?<button onClick={()=>{close.close(false)}} className="mobile-main-confirm-action-c">Продолжить покупки</button>:<div className="skeleton mobile-main-confirm-action-c-loader" />}
                </div>
            </div>
        </div>
    )
};

export default AddConfirm;